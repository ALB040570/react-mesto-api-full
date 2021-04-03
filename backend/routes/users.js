const router = require('express').Router();

const { patchUserValidate, patchAvatarValidate, getProfileValidate } = require('../middlewares/validations');

const {
  getUsers, getProfile, getProfileById, patchProfile, patchAvatar,
} = require('../controllers/users');

router.get('/users', getUsers);

router.get('/users/me', getProfile);

router.get('/users/:userId', getProfileValidate, getProfileById);

router.patch('/users/me', patchUserValidate, patchProfile);

router.patch('/users/me/avatar', patchAvatarValidate, patchAvatar);

module.exports = router;
