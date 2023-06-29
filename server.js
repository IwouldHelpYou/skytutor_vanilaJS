//const app = express (); //express 객체인 app이 get, post 등의 요청 처리
const express = require('express')

//express 객체 만듦
const app = express();

// content type 따라 post body, 즉 payload 파싱 다르게함
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//app.use(express.json()); //app.use(jsonParser); 사실은이거다★1-2노션
//app.use(express.urlencoded({extended: false}));

//css 를 적용하기 위해서 미들웨어를 사용해 css를 먹게한다.
app.use(express.static('public',{etag:false}));

// 미들웨어(session) 를 모듈로 설치
var session = require('express-session') 
var FileStore = require('session-file-store')(session);


// 세션 미들웨어. 접속할 때마다 세션이 생성될 것
app.use(session({
    secure : true, //https 에서만 통신
    httpOnly : true,
    secret : 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store:new FileStore()
  }))

//cowork DB에 있는 Members 테이블을 Member 라는 클래스, 즉 Member 모델이 인식하게 연동
const db = require('./models/index'); //models 만 써도됨. 노드에서 디렉토리만 적으면 index.js 자동검색하니
const { Member } = db;

//지정된 경로에 마운트 -> 템플릿 엔진으로 변경
/*
const login = require('./router/login/login_UI');
app.use('/', login);
*/

// 템플릿엔진
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

// 로그인창 
app.get("/login", (req,res) => res.render("login"));

var authData = {
  email: '채송화',
  password: '11111', //암호화하여 소스코드밖으로 빼서 관리자도 못보도록
  nickname: 'Mr.JUNG-SUNG'
}

// 로그인 검사하라고 login_auth 에 라우팅
const login_auth = require('./router/login/auth');
app.use('/', login_auth)

// main 페이지 라우팅
const main_server = require('./router/main/main_server');
app.use('/', main_server)

//서버 실행
app.listen(process.env.PORT || 3000, ()=>{console.log('3000번 드갑니다');});

//module.exports = router;
