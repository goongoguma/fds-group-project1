const form = document.querySelector('.number-list');
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');

form.addEventListener('submit', e => {
  const numberLi = document.createElement('li');
  let inputAll = input1.value + input2.value + input3.value;
  numberLi.textContent = inputAll;
  form.appendChild(numberLi);
  e.preventDefault();
  e.target.reset();
})