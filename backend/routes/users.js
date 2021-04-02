const router = require('express').Router();

const { patchUserValidate, patchAvatarValidate } = require('../middlewares/validations');

const {
  getUsers, getProfile, patchProfile, patchAvatar,
} = require('../controllers/users');

router.get('/users', getUsers);

router.get('/users/me', getProfile);

router.patch('/users/me', patchUserValidate, patchProfile);

router.patch('/users/me/avatar', patchAvatarValidate, patchAvatar);

module.exports = router;
