const form = document.querySelector('.number-list');
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');

const randomNum  = () => {
  const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 랜덤으로 세자리 숫자 뽑기
  const one = numberArr.splice(Math.floor(Math.random() * numberArr.length),1,0)
  const two = numberArr.splice(Math.floor(Math.random() * numberArr.length),1,0)
  const three = numberArr.splice(Math.floor(Math.random() * numberArr.length),1,0)
  return one+two+three
}
randomNum()

const ranNoVa = randomNum()

console.log(ranNoVa);

form.addEventListener('submit', e => {
  const numberLi = document.createElement('li');
  let inputAll = input1.value + input2.value + input3.value;
  numberLi.textContent = inputAll;
  form.appendChild(numberLi);
  e.preventDefault();
  e.target.reset();

  if(inputAll === ranNoVa) { 
    console.log('hello')
  } else {
    console.log('bye')
  }
})






