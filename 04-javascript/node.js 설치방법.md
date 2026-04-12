

# Node.js란? 

- 브라우저 밖에서도 JavaScript를 실행할 수 있게 해주는 환경

---

## Mac (macOS)

방법 1. Homebrew 사용 (권장)

1. Homebrew 설치 (이미 있으면 생략)
    

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Node 설치
    

```bash
brew install node
```

3. 설치 확인
    

```bash
node -v
npm -v
```

두 명령어 모두 버전이 출력되면 끝

---

방법 2. 공식 사이트 설치

1. Node.js 공식 사이트 접속
    
2. LTS 버전 다운로드
    
3. .pkg 파일 실행 후 안내에 따라 설치
    

---

## Windows

방법 1. 공식 설치 파일 사용

1. Node.js 공식 사이트 접속
    
2. LTS 버전 다운로드 (.msi)
    
3. 설치 진행
    

- Next로 계속 진행
    
- Add to PATH 옵션 체크
    

4. 설치 확인
    

```bash
node -v
npm -v
```

---

Windows에서 자주 발생하는 문제

node 명령어가 인식되지 않는 경우

- 원인: PATH 설정 문제
    
- 해결: 재부팅 또는 환경변수 PATH에 Node 경로 추가
    

---

설치 후 확인

1. npm 확인
    

```bash
npm -v
```

2. Node 실행 테스트
    

```bash
node
```

입력 후:

```javascript
console.log("hello");
```

출력되면 정상이다.

3. 파일 실행 테스트
    

```bash
touch test.js
```

```javascript
console.log("Node works!");
```

```bash
node test.js
```
