var mongoose = require('mongoose');
//链接数据库
//创建数据库存储结构
var userSchema = mongoose.Schema({
    email:{type:String,required:true},//邮箱，不能为空
    password:{type:String,required:true},//密码，不能为空
    avatar:{type:String,default:'/public/img/default_icon.png'},//用户头像，有默认值
    nickname:{type:String,required:true}//用户昵称，不能为空
});

//创建model
var userModel = mongoose.model('User', userSchema);

//导出
module.exports = userModel