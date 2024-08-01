## 01_input_textarea.html
1. input태그(요소)와 textarea태그(요소)에 id값을 주기.
2. label요소의 자식으로 input요소, textarea요소 만들기
3. label의 속성으로 for=""가 있는데 for=""의 속성값은 input, textarea의 id값과 동일하게 적용시켜야한다.
4. JavaScript에서 querySelector과 getElementById를 사용해서 input과 textarea에 접근하는 코드 작성.
5. button 요소를 클릭하면 콘솔창에 input과 textarea의 value값(입력한 값)이 콘솔창에 출력되도록 만들어보기.
6. .addEventListenr("click", () => {}); 사용.

## 02_select.html
1. select 요소의 자식으로는 option을 넣을 수 있다.
2. option은 속성으로 value=""를 주면 된다. 일반적으로 value="" 속성값과 option의 text는 동일하게 준다.
3. select 요소에 id값을 주기.
4. JavaScript에서 getElementById를 사용해서 select의 값이 변경되면 콘솔창에 변경된 값이 출력되도록 만들어보기.
5. .addEventListner("change", () => {}); 사용.