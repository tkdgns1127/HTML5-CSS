var express = require('express');
var cors = require('cors');

var app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.get("/get_request1", function(req,res){
    res.send("이것은 ajax get 메서드를 활용한 비동기 통신입니다.");
});

app.get("/get_request2", function(req,res){
    const data = {
        name : "kim",
        age : 23
    }
    res.json(data);
});

app.get("/get_request3", function(req,res){
    console.log(req.query);
    const data = {
        name : `내가 보낸 이름 : ${req.query.name}`,
        address : `내가 보낸 주소 : ${req.query.address}`
    }
    res.json(data);
});

app.post("/post_request1", function(req,res){
    res.send("이것은 ajax post 메서드를 활용한 비동기 통신입니다.");
});

app.post("/post_request2", function(req,res){
    const data = {
        name : "kim",
        age : 23
    }
    res.json(data);
});

app.post("/post_request3", function(req,res){
    const data = {
        name : `보낸 이름 : ${req.body.name}`,
        address : `보낸 주소 : ${req.body.address}`
    }
    res.json(data);
});

var server = app.listen(2000, function(){
    console.log('포트 2000번으로 서버 실행');
});