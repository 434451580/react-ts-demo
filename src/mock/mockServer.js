//引入express
let express = require('express')
// 导入路由配置
let baseMockData = require('./base')
//实例化express
let app = express();
// post请求体相关
let bodyParser = require('body-parser')
app.use(bodyParser.json())

// 允许跨域
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	// 此处根据前端请求携带的请求头进行配置 
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	// 例如： 我们公司的请求头需要携带Authorization和Client-Type，此处就应该按照以下进行配置
	// res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization, Client-Type");
	next();
})

// mock test
app.get('/api/test', function (req, res) {
	res.json(baseMockData.test)
})



app.listen(3001, () => {
	console.log('监听端口 3001')
})
