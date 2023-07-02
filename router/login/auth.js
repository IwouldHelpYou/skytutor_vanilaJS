const { request, response } = require('express');
const express = require('express');
const router = express.Router();

var authData = {
    email: '손다솔',
    password: '11111', //암호화하여 소스코드밖으로 빼서 관리자도 못보도록
    nickname: 'Mr.JUNG-SUNG'
}

//로그인 기능 구현
router.post('/login_auth', (req,res)=>{
 //res.send(`일단 post 받기는 받음 ${JSON.stringify(req.body)}`); 2번은 안됨
 console.log(req.body);
 console.log(authData);
 var post = req.body;
 var email = post.email;
 var password = post.password;
 console.log(email,password);
 if(email === authData.email && password === authData.password){
    req.session.is_logined = true;
    req.session.nickname = authData.nickname;
    // 세션 객체에 is_logined, nickname 담아
    if(req.session) {return res.redirect('/main')}
}else {return res.send(`누구냐...너눈`)}});

// 로그아웃 기능 구현
router.get('/logout', (req,res) =>{
    req.session.destroy( err => {
        res.redirect('login');
    } )
} )

module.exports = router;
