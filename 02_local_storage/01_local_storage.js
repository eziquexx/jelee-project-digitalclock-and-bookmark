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

  // console.log('userId: ' + $idInput.value);
  // console.log('password: ' + $passwordInput.value);

  // localStorage 객체와 setItem 메서드를 사용해서 아이디와 비밀번호 값을 로컬 스토리지에 저장.
  // localStorage.setItem() 작성법
  // localStorage.setItem(keyName, keyValue)
  // 아이디와 비밀번호의 keyName은 각각 id와 pwd로 설정한다.
  // 값은 로컬 스토리지에 저장되었다. 애플리케이션 탭에서 확인.
  localStorage.setItem("id", $idInput.value);
  localStorage.setItem("pwd", $passwordInput.value);

  // getItem 메서드를 사용해 로컬 스토리지에 저장된 값 출력하기.
  // 1.로컬 스토리지에 저장된 id, pwd의 키 값을 localStorage 객체의 getItem 메서드를 사용해 가져와서 각각 myId, myPassword 변수에 담아보자.
  // 2. 콘솔창에 id와 paswword 값을 출력해보자.
  // let myId = localStorage.getItem("id");
  // let myPassword = localStorage.getItem("pwd");
  // console.log(myId);
  // console.log(myPassword);

  // 로그인, 비밀번호를 userInfo로 묶어 로컬 스토리지에 저장하기.
  // local storage를 확인해보면 userInfo key에 키 값으로 [object, object]로 들어가 있다.
  // 자바스크립트에서 local storage는 텍스트 데이터만 저장할 수 있기 때문이다.
  // 객체 혹은 배열 형태의 데이터를 local storage에 저장하려면 데이터를 문자열로 변환해야한다.
  // 변환은 보통 자바스크립트의 내장 객체인 JSON을 사용한다.
  let userInfo = { id: $idInput.value, pwd: $passwordInput.value };
  localStorage.setItem("userInfo", userInfo);
});