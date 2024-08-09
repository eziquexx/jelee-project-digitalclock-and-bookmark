const $search = document.getElementById("search-input");

const moveResultPage = () => {
  let searchWord = $search.value; // input에 입력되는 값 가져오기.
  
  // 어떤 주소로 페이지를 이동시키기.
  // window객체의 location.href 속성을 사용하여 페이지를 특정 주소의 웹페이지로 이동시키기. 여기서는 구글 검색 페이지로..
  const windowURL = window.location.href = `https://www.google.com/search?q=${searchWord}`;

  window.open(windowURL,"mozillaTab");
  searchWord = ''; // 검색되고 난 뒤에 빈 값으로 초기화.
};

// enter키 눌렀을 때 실행될 함수 enterKey
const enterKey = (event) => {
  // event의 코드가 Enter일 때 moveResultPage 함수 실행
  if (event.code === "Enter") { //"Enter" 앞에 e가 대문자여야한다.
    moveResultPage();
  }
}

$search.addEventListener("keydown", (event) => { //keypress는 권장x keydown으로 변경함.
  enterKey(event);
})