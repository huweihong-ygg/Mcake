const express=require('express');
const session = require("express-session");
//引入body-parser中间件
const bodyParser=require('body-parser');
const cors=require("cors");
//引入路由器
//
const proRouter=require('./routes/pro.js');


var app=express();
app.use(cors({
  origin:['http://localhost:8080',"http://127.0.0.1:5500","http://127.0.0.1:5501"],
  credentials:true
}))
app.listen(8080);
//托管静态资源到public目录下
app.use( express.static('pro'));

app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},//过期时间ms
  resave:false,
  saveUninitialized:true
}));//将服务器的session，放在req.session中

//使用body-parser中间件
app.use( bodyParser.urlencoded({
  extended:false
}) );
//在服务器下使用，并挂载到/user
//所有路由的url自动添加/user, /user/reg
app.use('/pro',proRouter);

console.log("web服务器启动");
