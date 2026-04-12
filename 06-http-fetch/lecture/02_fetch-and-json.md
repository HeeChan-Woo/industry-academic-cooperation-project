# 6주차 - HTTP + fetch 2: fetch와 JSON

## 이번 주 목표

- `fetch`를 사용해 API 요청을 보낼 수 있다.
- `response.json()`의 역할을 이해할 수 있다.
- 가져온 데이터를 화면에 출력하는 흐름을 읽을 수 있다.

## 왜 이 실습을 하나요?

데이터를 가져오는 과정을 실제 코드로 보지 않으면 HTTP 개념이 추상적으로 느껴질 수 있습니다.
`fetch`는 브라우저에서 서버 데이터를 받아오는 가장 기본적인 도구이기 때문에 꼭 익혀야 합니다.

## 준비물

- 브라우저
- `06-http-fetch/example/public-api-viewer/script.js`
- API 주소 `https://koreandummyjson.vercel.app/posts`

## 이번 주 파일 설명

- `06-http-fetch/example/public-api-viewer/script.js`: 게시글 데이터를 요청하고 카드 형태로 출력하는 코드입니다.
- `06-http-fetch/starter/fetch-practice/script.js`: 일부 로직이 비어 있어 학생이 직접 완성하는 파일입니다.

## 코드에서 꼭 볼 부분

- `fetch(url)`: 주소로 요청을 보냅니다.
- `await`: 응답이 올 때까지 기다립니다.
- `response.json()`: 응답 본문을 JavaScript에서 다룰 수 있는 데이터로 바꿉니다.
- `map()`과 `join()`: 여러 게시글을 화면용 문자열로 만듭니다.

## 실습 순서

1. 버튼 클릭 시 `loadPosts()`가 실행되는지 확인합니다.
2. `fetch` 요청 주소를 읽습니다.
3. `response.json()` 뒤에 어떤 데이터가 들어오는지 확인합니다.
4. 화면에 게시글 5개가 출력되는지 확인합니다.

## 학생 실습 미션

1. 출력 개수를 3개 또는 7개로 바꿔보세요.
2. 제목만 출력하도록 바꿔보세요.
3. `fetch`와 `response.json()`의 역할을 각각 설명해보세요.

## 체크리스트

- [ ] `fetch` 요청 코드를 읽을 수 있다.
- [ ] JSON 응답이 화면 데이터로 바뀌는 과정을 이해했다.
- [ ] API 데이터를 반복 출력하는 구조를 읽을 수 있다.

## 자주 하는 실수

- `response.json()`을 빼먹는 경우
- 응답 데이터 구조를 확인하지 않고 바로 사용하는 경우
- 화면 출력 로직과 데이터 요청 로직을 구분하지 못하는 경우

## 한 줄 정리

`fetch`는 데이터를 가져오고, `response.json()`은 그 데이터를 JavaScript가 이해할 수 있게 바꿉니다.
