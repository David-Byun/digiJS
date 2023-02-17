const btn = document.querySelector('.btn');
const form = document.querySelector('form');

let customerList = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let createId = document.querySelector('#createId');
  let pwd = document.querySelector('#pwd');
  let name = document.querySelector('#name');

  if (createId.value == '' || pwd.value == '' || name.value == '') {
    alert('모든 빈칸에 입력해주세요!');
  } else {
    console.log('저장 완료');
  }

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (createId.value == key) {
      alert('이미 존재하는 아이디 입니다');
      name.value = '';
      createId.value = '';
      pwd.value = '';
      return;
    }
  }

  let createList = {
    비밀번호: pwd.value,
    고객명: name.value,
  };

  customerList.unshift(createList);
  console.log(createId.value, JSON.stringify(createList));
  localStorage.setItem(`${createId.value}`, JSON.stringify(createList));
  console.log(localStorage.length);

  name.value = '';
  createId.value = '';
  pwd.value = '';

  location.href = 'index.html';
});
