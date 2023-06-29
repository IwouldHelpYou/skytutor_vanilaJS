var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session') // 미들웨어(session) 를 모듈로 설치
var FileStore = require('session-file-store')(session);

var fileStoreOptions = {};

var app = express();

app.use(session({ 
    // 사용자 요청이 있을 때마다 이 코드를 실행되겠지. 
    // session에 객체 전달하여 동작 방법을 컨트롤
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  FileStore()
}))

app.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {}
  }

  // get the url pathname
  var pathname = parseurl(req).pathname

  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
  next()
})

app.get('/foo', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
})

app.get('/', function (req, res, next) {
    res.send(`<h1>보지 활짝</h1>`)
  })

app.listen(3000, ()=> {console.log('3000 간다잉')})



module.exports = {
  HTML:function(title, list, body, control){
  HTML:function(title, list, body, control, authStatusUI='<a href="/auth/login">login</a>'){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <a href="/auth/login">login</a>
      ${authStatusUI}
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/topic/${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}