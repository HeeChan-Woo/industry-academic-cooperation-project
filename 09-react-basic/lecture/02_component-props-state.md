# 9주차 - React 기초 2: 컴포넌트, props, state

## 이번 주 목표

- 컴포넌트, props, state를 구분할 수 있다.
- 어떤 값이 props이고 어떤 값이 state인지 판단할 수 있다.
- React 코드를 역할 중심으로 읽을 수 있다.

## 왜 이 실습을 하나요?

React를 처음 배울 때 가장 많이 헷갈리는 부분이 props와 state입니다.
이 둘을 제대로 구분해야 TODO 앱처럼 여러 컴포넌트가 연결된 구조를 이해할 수 있습니다.

## 준비물

- `09-react-basic/example/react-profile-card/src/App.jsx`
- `09-react-basic/example/react-counter/src/App.jsx`

## 이번 주 파일 설명

- `09-react-basic/example/react-profile-card/`: props 예제입니다.
- `09-react-basic/example/react-counter/`: state 예제입니다.

## 코드에서 꼭 볼 부분

- `컴포넌트`: 화면 조각입니다.
- `props`: 부모가 자식에게 전달하는 값입니다.
- `state`: 컴포넌트 내부에서 바뀌는 값입니다.

## 실습 순서

1. `ProfileCard` 컴포넌트를 읽습니다.
2. `name`, `major`, `hobby`가 어디서 오는지 확인합니다.
3. `09-react-basic/example/react-counter/src/App.jsx`에서 `count` state가 어떻게 바뀌는지 확인합니다.
4. props와 state의 차이를 말로 정리합니다.

## 학생 실습 미션

1. props 예시를 하나 더 만들어보세요.
2. state는 왜 필요한지 counter 예제로 설명해보세요.
3. "바깥에서 받는 값"과 "내부에서 바뀌는 값"을 구분해서 적어보세요.

## 체크리스트

- [ ] 컴포넌트, props, state를 구분할 수 있다.
- [ ] props와 state를 혼동하지 않는다.
- [ ] 예제 코드에서 각각의 위치를 찾을 수 있다.

## 자주 하는 실수

- props도 직접 바꾸는 값이라고 생각하는 경우
- state를 그냥 일반 변수처럼 이해하는 경우
- 컴포넌트가 함수라는 점을 놓치는 경우

## 한 줄 정리

React에서는 "바깥에서 받는 값은 props, 내부에서 바뀌는 값은 state"라고 이해하면 시작이 쉽습니다.
