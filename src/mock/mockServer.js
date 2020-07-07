const express = require("express");
const app = express(); //创建express 实例
const router = express.Router();//使用 express.Router 类来创建可安装的模块化路由处理程序

//基本路由：app.METHOD(PATH, HANDLER)
app.get('/',function(req,res){
	//req（请求）,res（响应）
	req.send("Hello Word!")
})
//方法1：
//router.use("/second",require('./mockApi'));
//app.use("/api",router) 

//方法2：
app.use("/api",require("./base.js"));//装入mockApi路由器模块

//应用程序会启动服务器，并在端口 3001 上侦听连接
app.listen(3001,function () {
  console.log('Example app listening on port 3001!');
})
