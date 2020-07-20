const express = require('express');
const router = express.Router();
const commentController = require('./Controller/CommentController');
 
router.get('/', commentController.listComment);

router.post('/', commentController.createComment);

router.get('/:id', commentController.getOneComment);

router.put('/:id', commentController.updateComment);

router.delete('/:id', commentController.deleteComment);
 
module.exports = router;