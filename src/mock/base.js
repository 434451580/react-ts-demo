const Mock = require("mockjs")
// const express = require("express");
// const router = express.Router();

const Random = Mock.Random;

let test = Mock.mock({
    "status":200,
    "content":{
        "data": "2020-06-02",
        "city": "BeiJing",
        "weather": "sunny~"
    },
    "message":"请求成功啦"
})

module.exports = {
    test
};



