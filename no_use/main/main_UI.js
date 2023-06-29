const express =require('express');
const session = require('express-session');
const path = require('path');
let main_HTML = require('./main_template.js.js.js.js');
const router = express.Router(); 
/* 라우터로 라우팅을 깔끔하게 관리하자 
app.get 같은 메서드가 라우터부분인데 많이 연결하면 코드가 매우 길어지니까 라우터로 분리한다
*/


const main = '../../../html/main.html'

// 로그인상태에서 get 요청 들어오면 유저정보ㅣlogout 띄우고 로그아웃시에는 login 창 띄우기


function authStatusUI(req,res){
if(req.session.is_logined){
    //const login = document.getElementById('login');
    res.send(main_HTML.foo.display());
    //login.HTML = `${req.session.nickname} | logout`
} else {res.send(`넌누구얍`)}

}

router.get('/main',(req,res)=>{
    //res.sendFile(path.join(__dirname + main));
    res.send(main_HTML.foo.display(req.session.nickname));
    //res.send(req.session);
})
/*
path.join을 통해 다른 경로와 연결해서 사용할 수 있다.
이 때 path 를 사용하기 위해서 require 해줘야함
*/
module.exports = router 

/* router 객체 애들을 밖으로 내보냄
다른 js 에서 let m= require('./main') 이렇게 쓰면 여기 router 애들을 쓰는거쥬 
*/