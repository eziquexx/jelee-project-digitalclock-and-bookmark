// 아이디, 비밀번호 입력 폼과 로그인 버튼에 접근하기.
const $idInput = document.getElementById('id');
const $passwordInput = document.getElementById('pwd');
const $loginButton = document.getElementById('login-btn');

// 아이디, 비밀번호 입력폼에 입력된 값 출력하기.
// 1. addEventListener를 사용하기.
// 2. 로그인 버튼을 누르면 '로그인 성공'이라는 alert를 띄우기.
// 3. 콘솔창에 아이디와 비밀번호의 값 출력하기.
$loginButton.addEventListener("click", () => {
  window.alert('로그인 성공');

  console.log('userId: ' + $idInput.value);
  console.log('password: ' + $passwordInput.value);

  // localStorage 객체와 setItem 메서드를 사용해서 아이디와 비밀번호 값을 로컬 스토리지에 저장.
  // localStorage.setItem() 작성법
  // localStorage.setItem(keyName, keyValue)
  // 아이디와 비밀번호의 keyName은 각각 id와 pwd로 설정한다.
  // 값은 로컬 스토리지에 저장되었다. 애플리케이션 탭에서 확인.
  localStorage.setItem("id", $idInput.value);
  localStorage.setItem("pwd", $passwordInput.value);

});