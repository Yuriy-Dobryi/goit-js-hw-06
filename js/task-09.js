const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const onChangeColorBtnClick = () => {
  const bodyRef = document.querySelector('body');
  
  bodyRef.style.backgroundColor = getRandomHexColor();
  document.querySelector("span.color").textContent =
    bodyRef.style.backgroundColor;
}
const changeBodyColorBtnRef = document.querySelector('button.change-color');

changeBodyColorBtnRef.addEventListener("click", onChangeColorBtnClick);