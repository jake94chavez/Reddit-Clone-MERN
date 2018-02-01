var express = require('express');
var router = express.Router();
var textPostsController = require('../controllers/textPosts');
var commentsController = require('../controllers/comments');
 

//TextPost Routes
router.get('/api/posts', textPostsController.index)
router.get('/api/posts/:id', textPostsController.show)
router.post('/api/posts', textPostsController.create)
router.put('/api/posts/:id', textPostsController.update)
router.delete('/api/posts/:id', textPostsController.destroy)
//Comment Routes
// router.get('/api/posts/:id/comments/', commentsController.index)
// router.get('/api/posts/:id/comments/:com_id', commentsController.show)
router.post('/api/posts/:id/comments/', commentsController.create)
router.put('/api/posts/:id/comments/:com_id', commentsController.update)
router.delete('/api/posts/:id/comments/:com_id', commentsController.destroy)
module.exports = router;