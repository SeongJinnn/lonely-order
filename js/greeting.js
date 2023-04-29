const loginInput = document.querySelector('#login-form input');
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function handleSubmit(ValueOfInput) {
  /*submit하면 이 함수가 실행이 됨*/
  ValueOfInput.preventDefault();
  /* handSubmit이라는 함수가 실행이 되면 이 함수가 브라우저의 기본동작을 막아줌 다시 말해 페이지 새로고침을 막아줌 */
  loginForm.classList.add(HIDDEN_CLASSNAME);
  /* 그리고 loginform에 hidden클래스를 추가함 그러므로써 로그인 화면이 사라짐*/
  const username = loginInput.value;
  /*loginInput의 값을 username이란 변수로 저장함 다시말해 '박성진'을 넣을건데 박성진 값을 username안에 저장함*/
  localStorage.setItem(USERNAME_KEY, username);
  /*'박성진'이라는 username을 username이라는 키와 함께 localStorage에 저장함  */
  paintGreeting(username);
  /* 그 다음 paintGreeting이라는 함수를 실행, 다시말해 greeting클래스 안에 있는 hidden클래스를 지우고 텍스트로 'hello 박성진'을 보여줌 */
}

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = 'Hello ' + username;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
/* !1번! 이름을 받아오는 로컬스토리지 ex) '박성진' 이라고 입력을 했으면 박성진이라는 이름이 username에저장됨*/

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  /* 만약에 localStorage가 비어있으면 loginform의 hidden 클래스를 삭제함으로써 로그인화면을 계속 보여줌*/
  loginForm.addEventListener('submit', handleSubmit);
  /*그 로그인 화면에서 값을 submit(제출)하면 handleSubmit이라는 함수가 실행이됨*/
} else {
  paintGreeting(savedUsername);
  /* localStorage 안에 username이라는 key가 있으면 이 함수가 실행이 됨 */
}
