// var http = require('http');
// var server=http.createServer(function(req,res){
//         if(req.url=='/'){

//         }else
//             res.end('Invalid Request!');

// });

// server.listen(5000);

// 以 Express 建立 Web 伺服器
var express = require("express");
var cookieParser = require('cookie-parser')
var app = express();
app.use(cookieParser())


// 以 body-parser 模組協助 Express 解析表單與JSON資料
var bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Web 伺服器的靜態檔案置於 public 資料夾
app.use(express.static("HTML"));

// 以 express-session 管理狀態資訊
var session = require('express-session');
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}));

// 指定 esj 為 Express 的畫面處理引擎
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('index', __dirname + '/index');

// 一切就緒，開始接受用戶端連線
// app.listen(process.env.PORT);
//http://127.0.0.1:5500/HTML/showInfo.html
app.listen(80);
console.log("Web伺服器就緒，開始接受用戶端連線.");
console.log("鍵盤「Ctrl + C」可結束伺服器程式.");


app.post("/home/news", function (req, res) {
    console.log(req.body['gift[]'][0])
    res.cookie('name', req.body['gift[][0]'])
    res.send("ok");
})



