const router = require('express').Router();

const {
  postCardsValidate, deleteCardValidate, likeValidate,
} = require('../middlewares/validations');

const {
  getCards, postCards, deleteCard, addLike, deleteLike,
} = require('../controllers/cards');

router.get('/cards', getCards);
router.post('/cards', postCardsValidate, postCards);
router.delete('/cards/:cardId', deleteCardValidate, deleteCard);
router.put('/cards/:cardId/likes', likeValidate, addLike);
router.delete('/cards/:cardId/likes', likeValidate, deleteLike);

module.exports = router;
