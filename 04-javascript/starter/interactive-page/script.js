const firstNumberInput = document.querySelector("#first-number");
const secondNumberInput = document.querySelector("#second-number");
const resultText = document.querySelector("#result");

const addButton = document.querySelector("#add-button");
const subtractButton = document.querySelector("#subtract-button");
const multiplyButton = document.querySelector("#multiply-button");
const divideButton = document.querySelector("#divide-button");

function getNumbers() {
  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  return { firstNumber, secondNumber };
}

function showResult(resultValue) {
  resultText.textContent = resultValue;
}

addButton.addEventListener("click", function () {
  const numbers = getNumbers();

  // TODO:
  // firstNumber와 secondNumber를 더한 결과를 result 변수에 저장해보세요.
  const result = 0;

  showResult(result);
});

subtractButton.addEventListener("click", function () {
  const numbers = getNumbers();

  // TODO:
  // firstNumber에서 secondNumber를 뺀 결과를 result 변수에 저장해보세요.
  const result = 0;

  showResult(result);
});

multiplyButton.addEventListener("click", function () {
  const numbers = getNumbers();

  // TODO:
  // firstNumber와 secondNumber를 곱한 결과를 result 변수에 저장해보세요.
  const result = 0;

  showResult(result);
});

divideButton.addEventListener("click", function () {
  const numbers = getNumbers();

  // TODO:
  // secondNumber가 0인지 먼저 확인해보세요.
  // 0이면 "0으로 나눌 수 없습니다."를 보여주고 함수를 종료해보세요.

  // TODO:
  // firstNumber를 secondNumber로 나눈 결과를 result 변수에 저장해보세요.
  const result = 0;

  showResult(result);
});
