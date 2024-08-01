// 아이디, 비밀번호 입력 폼과 로그인 버튼에 접근하기
const $idInput = document.getElementById('id');
const $passwordInput = document.getElementById('pwd');
const $loginButton = document.getElementById('login-btn');

// 아이디, 비밀번호 입력폼에 입력된 값 출력하기
// 1. addEventListener를 사용하기
// 2. 로그인 버튼을 누르면 '로그인 성공'이라는 alert를 띄우기
// 3. 콘솔창에 아이디와 비밀번호의 값 출력하기
$loginButton.addEventListener("click", () => {
  window.alert('로그인 성공');

  console.log('userId: ' + $idInput.value);
  console.log('password: ' + $passwordInput.value);
});