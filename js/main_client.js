window.addEventListener('DOMContentLoaded', () => {
  // DOMContentLoaded 이벤트 발생 시 태그를 수정
  fetch('/mai`n-nickname')
    .then(response => response.text())
    // 안하면 그냥 [object Reponse] 라고 뜸
    .then(nickname => {
      const loginTag = document.getElementById('login');
      //loginTag.outerHTML = 'a(href="/logout")#login 로그아웃'
      loginTag.outerHTML = '<a href="/logout" id="login">로그아웃</a>'
      //loginTag.textContent = `로그아웃`;
      
      const nickname_bar = document.getElementById('test');
      nickname_bar.textContent = `❤${nickname}의 미니홈피❤`
    })
});

         // (1) main 띄우면 html 에서 js 부르고 
         // (2) js는 fetch 로 다시 서버에 요청하여 데이터 받아오고 
         // (3) js 에서 그 데이터로 태그 수정            