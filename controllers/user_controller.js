//用户模块C层：负责用户功能的业务逻辑

var controller = module.exports;
var userModel = require('../models/user_model.js')

//1.展示注册界面
controller.showRegister = function(req,res){
    res.render('register.html')
}

//2.完成注册
controller.doRegister = function(req,res){
    //判断用户名是否存在
    var body = req.body;
    userModel.find({
        email: body.email
    }, function (err ,docs) {
        if (err) {
            res.end(JSON.stringify({
                err_code : 500,
                err_message : err.message
            }));
        }
        //未被注册
        if (docs.length == 0) {
            userModel.create(body, function (err, doc) {
                if (err) {
                    res.end(JSON.stringify({
                        err_code : 500,
                        err_message : err.message
                    }));
                }
                res.end(JSON.stringify({
                    err_code : 2000
                }));
            })
        }else {
            //被注册
            res.end(JSON.stringify({
                err_code : 2001
            }));
        }
    })
}


//3.展示登陆界面
controller.showLogin = function(req,res){
    res.render('login.html')
}


//4.完成登陆
controller.doLogin = function(req,res){
    var body = req.body;
    userModel.find({
        email: body.email
    }, function (err, docs) {
        if (err) {
            res.end(JSON.stringify({
                err_code : 500,
                err_message : err.message
            }));
        }
        //邮箱不存在
        if (docs.length == 0) {
            res.end(JSON.stringify({
                err_code : 1001
            }));
        }else {
            if (docs[0].password == body.password) {
               //设置session
               req.session.user = docs[0];
               res.end(JSON.stringify({
                    err_code : 1000
                }));
            }else {
                res.end(JSON.stringify({
                    err_code : 1001
                }));
            }
        }
    })
}


//5.注销登陆功能
controller.doLogout = function(req,res){
    req.session.user = null;
    res.writeHead(302, {
        'Location': 'http://127.0.0.1:3000/'
    })
    res.end();
}
