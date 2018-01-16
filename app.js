//导入模块

var express = require('express');
//创建服务器
var app = express();

//托管静态资源
app.use('/node_modules', express.static('node_modules'));
app.use('/public', express.static('public'));

//配置模板引擎
app.engine('html', require('express-art-template'));
app.set('view engine', 'html');

//express POST插件
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));



//配置路由容器

app.use(require('./router/article_router.js'));

app.use(require('./router/user_router.js'));

//首页
    //导入模块
    var mongoose = require('mongoose');
    //连接数据库
    mongoose.connect('mongodb://localhost/hmclub');
    //创建Schema
    //创建模型

    var articleModel = require('./models/article_model.js')
    //创建实体
    app.get('/', function (req,res) {
        articleModel.find(function (err, docs) {
            if (err) {
                throw err;
            }
            res.render('index.html', {
                articles : docs
            })
        })
    })
    //操作数据库


//监听端口号
app.listen(3000, function () {
    console.log('开启成功');
})
