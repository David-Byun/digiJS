const btnAddTxt = document.querySelector('#btnAddTxt');
btnAddTxt.addEventListener('click', createContent);

function createContent() {
  const userName = document.querySelector('#userName');
  const title = document.querySelector('#title');
  const content = document.querySelector('#content');
  const list = document.querySelector('#list');
  const createLi = document.createElement('li');

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let addList = '';

  if (userName.value == '') {
    alert('유저 이름을 넣어주세요');
    userName.focus();
  }

  if (title.value == '') {
    alert('제목을 넣어주세요');
  }

  addList =
    `<h1>${title.value}</h1>` +
    `<h2>${userName.value}</h2>` +
    `<h3>${content.value}</h3>`;

  createLi.innerHTML = addList;
  list.prepend(createLi);
  console.log(userName.value, title.value, content.value);
}
