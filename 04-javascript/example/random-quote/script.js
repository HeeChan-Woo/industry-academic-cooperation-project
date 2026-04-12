const quoteText = document.querySelector("#quote-text");
const quoteButton = document.querySelector("#quote-button");

const quotes = [
  "오늘의 작은 실행이 큰 변화를 만듭니다.",
  "완벽함보다 꾸준함이 더 중요합니다.",
  "에러는 실패가 아니라 힌트입니다.",
  "한 줄씩 이해하면 결국 전체가 보입니다.",
];

quoteButton.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});
