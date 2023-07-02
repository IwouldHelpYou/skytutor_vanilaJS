const express =require('express');
const session = require('express-session');
const path = require('path');
const router = express.Router(); 
/* 라우터로 라우팅을 깔끔하게 관리하자 
app.get 같은 메서드가 라우터부분인데 많이 연결하면 코드가 매우 길어지니까 라우터로 분리한다
*/


function authStatusUI(req,res){
if(req.session.is_logined){
    //login.HTML = `${req.session.nickname} | logout`
} else {res.send(`넌누구얍`)}
}

// 로그인상태에서 get 요청 들어오면 유저정보ㅣlogout 띄우고 로그아웃시에는 login 창 띄우기

router.get('/main', (req,res)=>{
    //res.sendFile(path.join(__dirname + main));
    const text = `된다 ㅎㅎㅎㅎㅎ`;
    const nickname = req.session.nickname
    res.render('main',{fromServer : text, name : nickname});

    // 1. send 하면 그냥 main 이란 텍스트가 render 하면 main.pug가
    // 2. 세션으로 전달해줄수도 있고 아니면 쿼리를 통해 이전 post에서 받은거 쓸 수도 있음
    // (1) main 띄우면 html 에서 js 부르고 
    // (2) js는 fetch 로 다시 서버에 요청하여 데이터 받아오고
    // 3. fetch가 뭔지? 
    // (3) js 에서 그 데이터로 태그 수정  
})

router.get('/main-nickname', (req,res) => {
    res.send(req.session.nickname);
})
/*
path.join을 통해 다른 경로와 연결해서 사용할 수 있다.
이 때 path 를 사용하기 위해서 require 해줘야함
*/

module.exports = router 

/* router 객체 애들을 밖으로 내보냄
다른 js 에서 let m= require('./main') 이렇게 쓰면 여기 router 애들을 쓰는거쥬 
*/