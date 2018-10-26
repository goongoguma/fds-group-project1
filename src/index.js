const form = document.querySelector(".number-list");
const ulEl = document.querySelector(".input-list");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");

let order = 1;

const randomNum = () => {
  const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 랜덤으로 세자리 숫자 뽑기
  const one = numberArr.splice(
    Math.floor(Math.random() * numberArr.length),
    1,
    0
  );
  const two = numberArr.splice(
    Math.floor(Math.random() * numberArr.length),
    1,
    0
  );
  const three = numberArr.splice(
    Math.floor(Math.random() * numberArr.length),
    1,
    0
  );
  return one + two + three;
};
randomNum();

// 값을 고정시키기 위해 변수 사용
const ranNoVa = randomNum();

console.log(ranNoVa);

form.addEventListener("submit", e => {
  // 예전 코드
  // const numberLi = document.createElement('li')
  // numberLi.classList.add('order')
  // let inputAll = input1.value + input2.value + input3.value;
  // numberLi.textContent = inputAll;
  // form.appendChild(numberLi);

  const liEl = document.createElement("li");
  const inning = document.createElement("div");
  const numberSpan1 = document.createElement("span");
  const numberSpan2 = document.createElement("span");
  const numberSpan3 = document.createElement("span");
  const EmptyDiv = document.createElement("div");
  const scoreP = document.createElement("p");

  // 클래스 및 텍스트 지정
  inning.classList.add("inningDisplay");
  EmptyDiv.classList.add("empty");
  scoreP.classList.add("ballAndStrike");
  numberSpan1.textContent = input1.value;
  numberSpan2.textContent = input2.value;
  numberSpan3.textContent = input3.value;

  const numAttach = () => {
    // li에 붙이기
    const li1 = liEl.appendChild(numberSpan1);
    const li2 = liEl.appendChild(numberSpan2);
    const li3 = liEl.appendChild(numberSpan3);
    const emptyEl = liEl.appendChild(EmptyDiv);
    const inningEl = liEl.insertBefore(inning, numberSpan1);
    const pEl = liEl.insertBefore(scoreP,emptyEl);

    // 위의 li를 ul에 붙이기
    ulEl.appendChild(li1);
    ulEl.appendChild(li2);
    ulEl.appendChild(li3);
    ulEl.appendChild(emptyEl);
    ulEl.appendChild(pEl)
    ulEl.appendChild(inningEl);
  };

  // 스트라이크, 볼 판별
  const game = inputNum => {
    let strike = 0;
    let ball = 0;
    // 사용자 입력 번호 조합
    inputNum =
      numberSpan1.textContent +
      numberSpan2.textContent +
      numberSpan3.textContent;
    // 볼 & 스트라이크판별
    const ballAndStrike = () => {
      for (let i = 0; i < ranNoVa.length; i++) {
        if (ranNoVa[i] === inputNum[i]) {
          strike++;
        } else if (ranNoVa.includes(inputNum[i])) {
          ball++;
        }
      }
      scoreP.textContent = `${ball}B, ${strike}S`;

      if (strike === 3) {
        scoreP.textContent = `${inputNum} 정답`
      } else if (strike === 0 && ball === 0) {
        scoreP.textContent = 'OUT';
      }
      numAttach();
    };

    // 최종 결정
    if (inputNum.split("").length < 3) {
      alert("빈칸이 없도록 입력해주세요.");
    } else if (inputNum[0] == inputNum[1] && inputNum[1] == inputNum[2]) {
      alert("중복된 숫자가 없도록 입력해주세요.");
    } else {
      ballAndStrike();
    }

    console.log(inputNum);
  };

  game();

  e.preventDefault();
  e.target.reset();
});
