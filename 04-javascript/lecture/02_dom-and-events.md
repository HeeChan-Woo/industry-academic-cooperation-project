# 4주차 - JavaScript 기초 2: 계산기와 버튼 이벤트

## 이번 주 목표

- 버튼 클릭 이벤트가 어떻게 연결되는지 이해할 수 있다.
- 숫자 버튼과 연산자 버튼을 구분해서 다룰 수 있다.
- 3주차에 만든 계산기 디자인에 실제 동작을 연결할 수 있다.

## 왜 이 실습을 하나요?

1단계에서 폼 제출 버튼 하나에 동작을 붙였다면, 이제는 계산기처럼 버튼이 많은 화면으로 확장합니다.
`03-css/example/calculator-design/`에서 만든 계산기 디자인을 이어받아, `04-javascript/example/calculator-mini/`에서 실제 계산이 되도록 바꿉니다.

## 준비물

- VS Code
- 브라우저
- `03-css/example/calculator-design/`
- `04-javascript/example/calculator-mini/`
- `04-javascript/starter/interactive-page/`

## 이번 주 파일 설명

- `03-css/example/calculator-design/index.html`: 3주차에 만든 계산기 구조입니다.
- `03-css/example/calculator-design/style.css`: 3주차 계산기 디자인입니다.
- `04-javascript/example/calculator-mini/index.html`: JavaScript가 연결된 계산기 화면입니다.
- `04-javascript/example/calculator-mini/script.js`: 숫자 입력, 연산자 선택, 계산 실행 로직이 들어 있는 파일입니다.
- `04-javascript/starter/interactive-page/script.js`: 학생이 계산 로직 TODO를 채우는 실습 파일입니다.

## 코드에서 꼭 볼 부분

- `document.querySelectorAll()`: 여러 버튼을 한 번에 선택합니다.
- `addEventListener("click", ...)`: 버튼 클릭 동작을 연결합니다.
- `forEach()`: 여러 버튼에 같은 이벤트를 반복해서 붙입니다.
- `textContent`: 계산기 디스플레이의 문구를 바꿉니다.

## 실습 순서

1. `03-css/example/calculator-design/index.html`과 `04-javascript/example/calculator-mini/index.html`을 비교합니다.
2. `04-javascript/example/calculator-mini/script.js`에서 숫자 버튼과 연산자 버튼을 어떻게 모으는지 읽습니다.
3. `appendNumber()`와 `chooseOperator()`가 각각 어떤 버튼에 연결되는지 확인합니다.
4. `04-javascript/starter/interactive-page/script.js`에서 더하기, 빼기, 곱하기, 나누기 TODO를 채웁니다.
5. 브라우저에서 버튼을 눌러 식과 결과가 어떻게 바뀌는지 확인합니다.

## 학생 실습 미션

1. `04-javascript/starter/interactive-page/script.js`에서 숫자 누적 TODO를 완성합니다.
2. `04-javascript/starter/interactive-page/script.js`에서 사칙연산 TODO를 완성합니다.
3. `04-javascript/starter/interactive-page/script.js`에서 0으로 나누기 처리 TODO를 완성합니다.
4. `C` 버튼이 왜 필요한지 말로 설명해봅니다.

## 체크리스트

- [ ] 여러 버튼에 클릭 이벤트를 붙이는 구조를 읽을 수 있다.
- [ ] 숫자 버튼과 연산자 버튼의 역할을 구분할 수 있다.
- [ ] 디스플레이 문구가 `textContent`로 바뀌는 흐름을 이해했다.
- [ ] 계산기 starter가 정상적으로 동작한다.

## 자주 하는 실수

- 버튼 선택자 이름과 HTML 속성 이름을 다르게 쓰는 경우
- `calculate()`가 실행되기 전 필요한 값이 모두 준비됐는지 확인하지 않는 경우
- 결과를 보여준 뒤 상태를 초기화하거나 갱신하지 않아 다음 계산이 꼬이는 경우

## 한 줄 정리

DOM과 이벤트를 이해하면 "디자인된 버튼에 실제 동작을 붙여 작동하는 계산기"를 만들 수 있습니다.
