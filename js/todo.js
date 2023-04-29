const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementById('todo-list');

let toDos = [];
const TODOS_KEY = 'todos';

function savetodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deletetodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  savetodos();
}

function paintTodo(newtodo) {
  const li = document.createElement('li');
  li.id = newtodo.id;
  const span = document.createElement('span');
  span.innerText = newtodo.text;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deletetodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handletodosubmit(event) {
  event.preventDefault();
  const newtodo = todoInput.value;
  todoInput.value = '';
  const newtodoobj = {
    text: newtodo,
    id: Date.now(),
  };
  toDos.push(newtodoobj);
  paintTodo(newtodoobj);
  savetodos();
}

todoForm.addEventListener('submit', handletodosubmit);
const savedtodos = localStorage.getItem(TODOS_KEY);

if (savedtodos !== null) {
  const parsedtodos = JSON.parse(savedtodos);
  toDos = parsedtodos;
  parsedtodos.forEach(paintTodo);
}
