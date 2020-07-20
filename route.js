const express = require('express');
const router = express.Router();
const blogController = require('./Controller/BlogController');
 
router.get('/', blogController.listBlog);

router.post('/', blogController.createBlog);

router.get('/:id', blogController.getOneBlog);

router.put('/:id', blogController.updateBlog);

router.delete('/:id', blogController.deleteBlog);
 
module.exports = router;