function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnColor = document.querySelector(".change-color");
btnColor.addEventListener("click", () => {
  const hexColor = getRandomHexColor();
  const spanTag = document.querySelector(".color");
  spanTag.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});