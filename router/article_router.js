var express = require('express');
var router = express.Router();

var articleController = require('../controllers/article_controller');

router.get('/article/add',articleController.showArticleAdd)//展示添加文章界面
.post('/article/add',articleController.doArticleAdd)//添加文章
.get('/article/info',articleController.showArticleInfo)//查看文章
.get('/article/edit',articleController.showArticleEdit)//展示编辑文章界面
.post('/article/edit',articleController.doArticleEdit);//编辑文章

module.exports = router;