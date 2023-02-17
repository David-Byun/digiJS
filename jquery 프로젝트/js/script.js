let customerList = [];

$(form).on('submit', (e) => {
  e.preventDefault();

  if (
    $('#createId').val() == '' ||
    $('#pwd').val() == '' ||
    $('#name').val() == ''
  ) {
    alert('모든 빈칸에 입력해주세요!');
  }

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (createId.value == key) {
      alert('이미 존재하는 아이디 입니다');
      valueNull();
      return;
    }
  }

  let createList = {
    비밀번호: $('#pwd').val(),
    고객명: $('#name').val(),
  };

  customerList.unshift(createList);
  localStorage.setItem(`${createId.value}`, JSON.stringify(createList));
  location.href = 'index.html';
});

function valueNull() {
  $('#name').val() == '';
  $('#createId').val() == '';
  $('#pwd').val() == '';
}
