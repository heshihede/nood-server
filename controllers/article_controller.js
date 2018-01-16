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

}
conteoller.showArticleEdit = function (req, res) {

}
conteoller.doArticleEdit = function (req, res) {

}