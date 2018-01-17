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

//cookie-session插件
var cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'sid',
  keys: ['黑马程序员'],//中间件会对cookie数据进行加密，该参数设置加密的钥匙
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours  //cookie有效期 单位毫秒
  //一般网站cookie的有效期是一天
}));


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
            var user = req.session.user
            res.render('index.html', {
                articles : docs,
                user: user
            })
        })
    })
    //操作数据库


//监听端口号
app.listen(3000, function () {
    console.log('开启成功');
})
