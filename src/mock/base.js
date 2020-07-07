const Mock = require("mockjs")
const express = require("express");
const router = express.Router();

const Random = Mock.Random;

router.get('/api/test/mockTest', function(req, res) {
    //调用mock方法，模拟数据
    let data = Mock.mock({
        "status":200,
        "content":{
            "data": "2020-06-02",
            "city": "BeiJing",
            "weather": "sunny~"
        },
        "message":"请求成功啦"
    })
    return res.json(data);//res.json()发送 JSON 响应。
});

module.exports = router;


