const loadButton = document.querySelector("#load-button");
const postList = document.querySelector("#post-list");

async function loadPosts() {
  postList.innerHTML = "<p>데이터를 불러오는 중입니다...</p>";

  // TODO:
  // fetch를 사용해서 아래 주소로 요청을 보내보세요.
  // https://koreandummyjson.vercel.app/posts

  // TODO:
  // response.json()을 사용해서 JSON 데이터를 꺼내보세요.

  // TODO:
  // data.posts 배열에서 5개만 골라서 화면에 출력해보세요.
  // 힌트: map, join을 활용하면 카드 문자열을 만들 수 있습니다.

  postList.innerHTML = "<p>여기에 가져온 게시글을 출력해보세요.</p>";
}

loadButton.addEventListener("click", loadPosts);
