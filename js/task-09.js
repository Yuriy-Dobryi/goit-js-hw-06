const changeBodyColorBtnRef = document.querySelector("button.change-color");

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const onChangeColorBtnClick = () => {
  const bodyRef = document.querySelector("body");
  const colorValueRef = document.querySelector("span.color");
  const randomHexColor = getRandomHexColor();

  bodyRef.style.backgroundColor = randomHexColor;
  colorValueRef.textContent = randomHexColor;
};

changeBodyColorBtnRef.addEventListener("click", onChangeColorBtnClick);