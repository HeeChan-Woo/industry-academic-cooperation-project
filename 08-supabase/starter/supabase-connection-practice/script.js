// TODO:
// 자신의 Supabase 프로젝트 URL과 anon key를 입력해보세요.
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

function renderTodos(todos) {
  const todoItems = todos
    .map(function (todo) {
      return `
        <li>
          <strong>${todo.content}</strong>
          <div>완료 여부: ${todo.is_done ? "완료" : "진행 중"}</div>
          <div>생성일: ${todo.created_at}</div>
        </li>
      `;
    })
    .join("");

  todoList.innerHTML = todoItems;
}

async function loadTodos() {
  // TODO:
  // todo 테이블에서 id, content, is_done, created_at 컬럼을 조회해보세요.
  // 힌트: client.from("todo").select(...)
}

async function addTodo(event) {
  event.preventDefault();

  const content = todoInput.value.trim();

  if (!content) {
    alert("할 일을 입력해주세요.");
    return;
  }

  // TODO:
  // todo 테이블에 새 할 일을 추가해보세요.
  // content, is_done 값을 넣어보세요.

  todoInput.value = "";

  // TODO:
  // 추가가 끝난 뒤 목록을 다시 불러와보세요.
}

todoForm.addEventListener("submit", addTodo);

// TODO:
// 페이지가 열리면 loadTodos()가 실행되도록 작성해보세요.
