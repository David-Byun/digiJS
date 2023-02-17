const btn = document.querySelector('.btn');
const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let loginId = document.querySelector('#loginId');
  let loginPwd = document.querySelector('#loginPwd');

  if (loginId.value == '' || loginPwd.value == '') {
    alert('아이디 혹은 비밀번호를 입력해주세요');
  } else {
    if (
      localStorage.getItem(`${loginId.value}`) == '' ||
      localStorage.getItem(`${loginId.value}`) == null
    ) {
      alert('회원가입이 필요해요!');
    } else {
      let findById = JSON.parse(localStorage.getItem(loginId.value));
      if (findById['비밀번호'] != loginPwd.value) {
        alert('비밀번호가 틀렸어요!');
      } else {
        alert('로그인이 성공했어요!');
        location.href = 'mealFinder/index.html';
      }
    }
  }
});
