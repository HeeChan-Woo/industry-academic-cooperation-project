# 4주차 - JavaScript 기초 3: 배열, 조건문, 반복문

## 이번 주 목표

- 배열과 조건문의 역할을 구분해서 설명할 수 있다.
- 여러 개의 데이터를 하나로 묶어 다루는 방식을 이해할 수 있다.
- 계산기 예제에서 예외 상황을 조건문으로 처리할 수 있다.

## 왜 이 실습을 하나요?

폼과 계산기까지 만들었다고 해서 모든 상황을 한 줄 코드로 해결할 수 있는 것은 아닙니다.
랜덤 문구처럼 여러 데이터를 다룰 때는 배열이 필요하고, 0으로 나누기처럼 막아야 하는 상황에는 조건문이 필요합니다.

## 준비물

- VS Code
- 브라우저
- `04-javascript/example/random-quote/script.js`
- `04-javascript/example/calculator-mini/script.js`
- `04-javascript/starter/interactive-page/script.js`

## 이번 주 파일 설명

- `04-javascript/example/random-quote/script.js`: 여러 문구를 배열로 관리하는 예제입니다.
- `04-javascript/example/calculator-mini/script.js`: 조건문으로 계산 예외를 처리하는 예제입니다.
- `04-javascript/starter/interactive-page/script.js`: 조건문과 계산 로직을 직접 완성하는 실습 파일입니다.

## 코드에서 꼭 볼 부분

- `[]`: 여러 값을 묶는 배열입니다.
- `if`: 특정 조건일 때만 코드를 실행합니다.
- `return`: 함수 실행을 여기서 멈춥니다.
- `forEach()`: 여러 요소에 같은 동작을 반복할 때 사용합니다.

## 실습 순서

1. `04-javascript/example/random-quote/script.js`에서 문구 배열을 읽어봅니다.
2. 배열에 값이 여러 개 들어 있다는 점을 확인합니다.
3. `04-javascript/example/calculator-mini/script.js`에서 0으로 나누기 조건문을 찾습니다.
4. `04-javascript/starter/interactive-page/script.js`에서 조건문 TODO를 완성합니다.

## 학생 실습 미션

1. `04-javascript/example/random-quote/script.js`의 배열에 문장을 2개 더 추가합니다.
2. `04-javascript/starter/interactive-page/script.js`에서 0으로 나누기 처리 TODO를 직접 작성합니다.
3. 왜 배열은 랜덤 문구 예제에 필요하고, 조건문은 계산기 예제에 필요한지 설명해봅니다.

## 체크리스트

- [ ] 배열이 여러 값을 묶는 구조라는 점을 이해했다.
- [ ] 조건문이 잘못된 계산을 막는다는 점을 이해했다.
- [ ] 반복과 조건이 실제 예제에서 어떻게 쓰이는지 읽을 수 있다.

## 자주 하는 실수

- 배열과 일반 변수의 차이를 흐리게 이해하는 경우
- 조건문 없이 잘못된 입력을 그대로 계산하려는 경우
- 같은 동작을 반복해서 써야 하는데 `forEach()`를 읽지 못하는 경우

## 한 줄 정리

배열과 조건문은 "버튼이 눌렸을 때 무엇을 반복하고, 무엇을 막아야 하는가"를 다루는 기본 도구입니다.
