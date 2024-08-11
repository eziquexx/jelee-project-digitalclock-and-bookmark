const API_URL = "https://random-quote.hyobb.com/"; //명언 가져오기
const $quote = document.getElementById("quote"); //quote 요소 가져오기
const quoteItem = localStorage.getItem("quote");

const nowDate = new Date();
const month = nowDate.getMonth() + 1;
const date = nowDate.getDate();

const setQuote = (result) => {
  const quote = {
    createdDate : `${month}-${date}`,
    quoteData : result,
  }
  localStorage.setItem("quote", JSON.stringify(quote));
  $quote.textContent = `"${result}"`;

}

const getQuote = async () => {
  try {
    //API_URL에 데이터를 요청한다. 
    //fetch 메서드의 반환값은 프로미스 객체이므로(3가지가 있다.)
    //프로미스 객체의 .then 메서드를 사용하여 반환값을 json 메서드를 사용해
    //자바스크립트 객체로 변환한다.
    const data = await fetch(API_URL).then((res) => res.json());
    
    //콘솔창 확인하면 1번 객체의 키값이 respond인걸 알 수 있음. 
    //내가 가져올 값은 1번 객체의 키값인 respond의 value라서 result에 이렇게 담아줌.
    const result = data[1].respond; 
    setQuote(result);
  } catch (err) {
    console.log(`err : ${err}`);
    setQuote("만약 하루를 성공하고 싶다면, 반드시 첫 한 시간을 성공해야 한다.")
  }
};

if(quoteItem) {
  let { createdDate, quoteData } = JSON.parse(quoteItem);
  if(createdDate === `${month}-${date}`) {
    $quote.textContent =`"${quoteData}"`;
  } else {
    getQuote();
  }
} else {
  getQuote();
}

