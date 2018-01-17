//导入处理数据
var articleModel = require('../models/article_model')

//导出
var conteoller = module.exports;


conteoller.showArticleAdd = function (req, res) {
    res.render('article/articleAdd.html')
}
conteoller.doArticleAdd = function (req, res) {
    var body = req.body;
    articleModel.create(body, function (err, doc) {
        if (err) {
            res.end(JSON.stringify({
                err_code : 500,
                err_message : err.message
            }));
           
        }else {
            res.end(JSON.stringify({
                err_code : 0
            }));
        }
    })
}
conteoller.showArticleInfo = function (req, res) {
    var articleId = req.query.id;
    articleModel.findById(articleId, function (err, doc) {
        if (err) {
            res.end(JSON.stringify({
                err_code : 500,
                err_message : err.message
            }))
        }else {
            res.render('article/articleInfo.html', {
                article: doc
            })
        }
    })

}
conteoller.showArticleEdit = function (req, res) {
    var articleId = req.query.id;
    articleModel.findById(articleId, function (err, doc) {
        if (err) {
            res.end(JSON.stringify({
                err_code : 500,
                err_message : err.message
            }))
        }else {
            res.render('article/articleEdit.html', {
                article: doc
            })
        }
    })
}
conteoller.doArticleEdit = function (req, res) {
    var body = req.body;
    console.log(body);
    articleModel.findByIdAndUpdate(body.id, body, function (err, doc) {
        if (err) {
            res.end(JSON.stringify({
                err_code : 500,
                err_message : err.message
            }));
           
        }else {
            res.end(JSON.stringify({
                err_code : 0
            }));
        }
    })
}