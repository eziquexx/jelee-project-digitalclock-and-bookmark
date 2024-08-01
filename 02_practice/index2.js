const $fruits = document.getElementById('fruits');

console.log($fruits);

$fruits.addEventListener("click", () => {
  console.log($fruits.value);
});