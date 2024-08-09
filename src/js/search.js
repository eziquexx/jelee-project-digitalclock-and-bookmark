const $search = document.getElementById("search-input");

const moveResultPage = () => {
  let searchWord = $search.value; // input에 입력되는 값 가져오기.
  
  // 어떤 주소로 페이지를 이동시키기.
  // window객체의 location.href 속성을 사용하여 페이지를 특정 주소의 웹페이지로 이동시키기. 여기서는 구글 검색 페이지로..
  window.location.href = `https://www.google.com/search?q=${searchWord}`;
  searchWord = ''; // 검색되고 난 뒤에 빈 값으로 초기화.
};