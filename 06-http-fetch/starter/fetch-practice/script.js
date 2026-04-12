const loadButton = document.querySelector("#load-button");
const postList = document.querySelector("#post-list");

async function loadPosts() {
  postList.innerHTML = "<p>데이터를 불러오는 중입니다...</p>";

  // TODO:
  // fetch를 사용해서 아래 주소로 요청을 보내보세요.
  // https://koreandummyjson.vercel.app/posts

  try {
    const response = await fetch("https://koreandummyjson.vercel.app/posts");

    // TODO:
    // response.json()을 사용해서 JSON 데이터를 꺼내보세요.
    const data = await response.json();

    // TODO:
    // data.posts 배열에서 5개만 골라서 화면에 출력해보세요.
    // 힌트: map, join을 활용하면 카드 문자열을 만들 수 있습니다.
    const firstFivePosts = data.posts.slice(0, 5);
    const postItems = firstFivePosts
      .map(function (post) {
        return `
          <li class="post-card">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </li>
        `;
      })
      .join("");

    postList.innerHTML = `<ul class="post-list">${postItems}</ul>`;
  } catch (error) {
    postList.innerHTML = "<p>데이터를 가져오는 중 오류가 발생했습니다.</p>";
    console.error(error);
  }
}

loadButton.addEventListener("click", loadPosts);
