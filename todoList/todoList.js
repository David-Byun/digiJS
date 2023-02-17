const todoInput = document.querySelector('#todo-input');
todoInput.addEventListener('keypress', enterkey);
const clearBtn = document.querySelector('.clear-completed-btn');
const leftItem = document.querySelector('.left-items');
const div = document.createElement('div');
const span = document.createElement('span');
const todo = document.querySelector('.todo');
const todoList = document.querySelector('.todo-list');
function enterkey() {
  if (window.event.keyCode == 13) {
    enterInput();
  }
}
let id = 1;
function get() {
  for (let i = 1; i <= localStorage.length; i++) {
    const getList = `<span>${localStorage.key(i)}</span>`;
    console.log(getList);
  }
}

get();

function enterInput() {
  const createli = document.createElement('li');
  const cancelBtn = document.createElement('button');
  const addList = `<span class="todo" id=${id}>${todoInput.value}</span>`;

  if (todoInput.value == '' || todoInput.value == null) {
    alert('할 일을 입력하지 않았어요!');
    return;
  }
  id++;
  createli.innerHTML = addList;
  localStorage.setItem(id, todoInput.value);
  cancelBtn.innerText = 'X';
  cancelBtn.classList.add('delBtn');
  cancelBtn.id = `${id}`;
  createli.append(cancelBtn);
  todoList.prepend(createli);
  todoInput.value = '';

  cancelBtn.addEventListener('click', (e) => {
    console.log(e.target.id);
    localStorage.removeItem(e.target.id);
    createli.remove(addList);
    leftItem.innerText = `${todoList.childElementCount}개의 할 일`;
  });

  clearBtn.addEventListener('click', () => {
    createli.remove(addList);
    localStorage.clear();
    leftItem.innerText = '할 일이 없어요!';
    id = 0;
  });
  leftItem.innerText = `${todoList.childElementCount}개의 할 일`;
}
