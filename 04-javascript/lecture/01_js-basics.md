# 4주차 - JavaScript 기초 1: 폼과 함수

## 이번 주 목표

- JavaScript가 "버튼을 눌렀을 때 실행되는 동작"을 만든다는 점을 이해할 수 있다.
- `const`, `function`, `alert()`가 어떤 역할을 하는지 설명할 수 있다.
- 폼 입력값을 읽어 간단한 결과를 화면 밖 팝업으로 보여줄 수 있다.

## 왜 이 실습을 하나요?

`02-html/example/campus-form/index.html`에서는 동아리 지원 폼의 구조만 만들었습니다.
이번에는 그 폼을 CSS로 보기 좋게 정리한 뒤, `지원서 제출하기` 버튼을 눌렀을 때 입력한 정보를 `alert()`로 띄워봅니다.
이 단계가 JavaScript를 가장 쉽게 체감하는 시작점입니다.

## 준비물

- VS Code
- 브라우저
- `02-html/example/campus-form/index.html`
- `04-javascript/example/campus-form-alert/`
- `04-javascript/starter/campus-form-alert/`

## 이번 주 파일 설명

- `02-html/example/campus-form/index.html`: HTML만으로 만든 동아리 지원 폼입니다.
- `04-javascript/example/campus-form-alert/index.html`: CSS와 JavaScript가 연결된 완성 예제입니다.
- `04-javascript/example/campus-form-alert/style.css`: 폼 디자인이 들어 있는 스타일 파일입니다.
- `04-javascript/example/campus-form-alert/script.js`: 입력값을 읽고 `alert()`를 띄우는 완성 코드입니다.
- `04-javascript/starter/campus-form-alert/script.js`: 학생이 TODO를 채워 완성하는 실습 파일입니다.

## 코드에서 꼭 볼 부분

- `document.querySelector()`: HTML 요소를 찾아 변수에 저장합니다.
- `.value`: 입력창에 적힌 값을 읽습니다.
- `function`: 여러 줄 동작을 하나로 묶습니다.
- `alert()`: 브라우저 팝업으로 메시지를 보여줍니다.
- `event.preventDefault()`: 폼 제출 시 새로고침되는 기본 동작을 막습니다.

## 실습 순서

1. `02-html/example/campus-form/index.html`과 `04-javascript/example/campus-form-alert/index.html`을 비교해 무엇이 추가되었는지 확인합니다.
2. `04-javascript/example/campus-form-alert/script.js`에서 어떤 변수가 어떤 입력창을 가리키는지 읽습니다.
3. `createAlertMessage()` 함수가 입력값을 어떻게 모으는지 따라갑니다.
4. `submit` 이벤트가 연결된 부분을 읽고, 왜 `event.preventDefault()`가 필요한지 확인합니다.
5. `04-javascript/starter/campus-form-alert/script.js`의 TODO를 채워 직접 제출 팝업을 띄워봅니다.

## 학생 실습 미션

1. `04-javascript/starter/campus-form-alert/script.js`에서 각 입력값을 변수에 저장하는 코드를 완성합니다.
2. `04-javascript/starter/campus-form-alert/script.js`에서 `event.preventDefault()`를 직접 추가합니다.
3. `04-javascript/starter/campus-form-alert/script.js`에서 `alert(message)`를 완성합니다.
4. 팝업 문구를 자신이 원하는 표현으로 조금 바꿔봅니다.

## 체크리스트

- [ ] JavaScript가 버튼 클릭이나 제출 같은 동작에 반응한다는 점을 이해했다.
- [ ] 입력창의 `.value`를 읽을 수 있다.
- [ ] 함수가 여러 줄 로직을 묶는다는 점을 이해했다.
- [ ] 제출 버튼 클릭 후 `alert()`가 정상적으로 뜬다.

## 자주 하는 실수

- `querySelector()`로 찾은 요소와 실제 HTML의 `id`가 다를 때
- `.value` 대신 요소 자체를 문자열처럼 쓰는 경우
- `event.preventDefault()`를 빼먹어서 폼이 바로 새로고침되는 경우
- `alert()`에 문자열이 아니라 정의되지 않은 값을 넣는 경우

## 한 줄 정리

JavaScript의 첫걸음은 "폼에 입력된 값을 읽고, 버튼을 눌렀을 때 원하는 동작을 실행하는 것"입니다.
