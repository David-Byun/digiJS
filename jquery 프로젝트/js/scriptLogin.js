$('#loginForm').on('submit', (e) => {
  e.preventDefault();

  if ($('#loginId').val() === '' || $('#loginPwd').val() === '') {
    alert('아이디 혹은 비밀번호를 입력해주세요');
  } else {
    if (
      localStorage.getItem(`${$('#loginId').val()}`) === '' ||
      localStorage.getItem(`${$('#loginId').val()}`) === null
    ) {
      alert('회원가입이 필요해요!');
    } else {
      let findById = jQuery.parseJSON(
        localStorage.getItem($('#loginId').val())
      );
      if (findById['비밀번호'] != $('#loginPwd').val()) {
        alert('비밀번호가 틀렸어요!');
      } else {
        alert('로그인이 성공했어요!');
        location.href = 'mealFinder/index.html';
      }
    }
  }
});
