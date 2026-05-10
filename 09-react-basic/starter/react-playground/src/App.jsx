import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("React 실습을 시작해보세요.");

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <h1>React Playground</h1>
        <p>{message}</p>
        <button
          style={styles.button}
          onClick={() => {
            // TODO:
            // 버튼을 눌렀을 때 다른 문장으로 바꾸어보세요.
            setMessage("봄봄봄 봄이 갔네요~ 나만뺴고 다들 설렜던 그 봄~");
          }}
        >
          문장 바꾸기
        </button>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecfeff",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    padding: "32px",
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    textAlign: "center",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
  },
  button: {
    border: "none",
    borderRadius: "12px",
    padding: "12px 18px",
    backgroundColor: "#0f766e",
    color: "#ffffff",
    cursor: "pointer",
  },
};

export default App;
