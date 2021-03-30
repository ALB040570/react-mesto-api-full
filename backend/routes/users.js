const router = require('express').Router();

const {
  getUsers, getProfile, patchProfile, patchAvatar,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/me', getProfile);
router.patch('/users/me', patchProfile);
router.patch('/users/me/avatar', patchAvatar);

module.exports = router;
