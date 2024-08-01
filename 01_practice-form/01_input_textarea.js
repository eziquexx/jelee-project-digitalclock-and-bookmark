let $input = document.querySelector('#name');
let $textArea = document.getElementById('major');
let $button = document.getElementById('save-btn');

console.log($input);
console.log($textArea);

$button.addEventListener('click', () => {
  console.log($input.value);
  console.log($textArea.value);
});