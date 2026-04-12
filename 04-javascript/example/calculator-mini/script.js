// 입력창과 결과 표시 요소를 미리 선택해둡니다.
const firstNumberInput = document.querySelector("#first-number");
const secondNumberInput = document.querySelector("#second-number");
const resultText = document.querySelector("#result");

// 버튼 요소를 각각 변수에 저장합니다.
const addButton = document.querySelector("#add-button");
const subtractButton = document.querySelector("#subtract-button");
const multiplyButton = document.querySelector("#multiply-button");
const divideButton = document.querySelector("#divide-button");

// 입력값은 문자열이기 때문에 숫자로 바꿔서 사용합니다.
function getNumbers() {
  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  return { firstNumber, secondNumber };
}

// 결과 화면을 업데이트하는 함수입니다.
function showResult(resultValue) {
  resultText.textContent = resultValue;
}

addButton.addEventListener("click", function () {
  const numbers = getNumbers();
  const result = numbers.firstNumber + numbers.secondNumber;
  showResult(result);
});

subtractButton.addEventListener("click", function () {
  const numbers = getNumbers();
  const result = numbers.firstNumber - numbers.secondNumber;
  showResult(result);
});

multiplyButton.addEventListener("click", function () {
  const numbers = getNumbers();
  const result = numbers.firstNumber * numbers.secondNumber;
  showResult(result);
});

divideButton.addEventListener("click", function () {
  const numbers = getNumbers();

  // 0으로 나누는 상황을 먼저 막아줍니다.
  if (numbers.secondNumber === 0) {
    showResult("0으로 나눌 수 없습니다.");
    return;
  }

  const result = numbers.firstNumber / numbers.secondNumber;
  showResult(result);
});
