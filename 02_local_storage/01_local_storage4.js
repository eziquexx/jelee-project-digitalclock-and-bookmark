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
  let userInfo = { id: $idInput.value, pwd: $passwordInput.value };
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  let saveUserInfo = localStorage.getItem("userInfo");
  console.log(saveUserInfo);
  console.log(typeof saveUserInfo); // stirng으로 나옴.
  console.log(JSON.parse(saveUserInfo)); // 객체 형태로 출력됨.
  

  // 로컬 스토리지에 저장된 값을 그대로 가져오게 되면 문자열 데이터가 반환된다.
  // 그렇기 때문에 로컬 스토리지에 저장된 값을 가져올 때는
  // 가져온 데이터를 자바스크립트가 활용할 수 있도록 JSON 객체의 parse 메서드를 사용해
  // 객체 형태로 다시 변환하는 것이 좋다.
});