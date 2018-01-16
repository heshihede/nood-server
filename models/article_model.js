var mongoose = require('mongoose');
//链接数据库
//创建数据库存储结构
var articleSchema = mongoose.Schema({
    title:{type:String,required:true},//文章标题，不能为空
    content:{type:String,required:true},//文章内容，不能为空
    articleType:{type:String,default:'chuishui'}
});

//创建model
var articleModel = mongoose.model('Article', articleSchema);

//导出
module.exports = articleModel