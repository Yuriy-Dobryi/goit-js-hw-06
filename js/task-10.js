function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const ref = {
  input: document.querySelector("#controls input"),
  dataCreateBtn: document.querySelector("[data-create]"),
  dataDestroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector('#boxes'),
}

const createBoxes = (amount) => {
  let boxesMarkup = ``;
  for (let value = 30, index = 0; index < amount; index += 1, value += 10) {
    boxesMarkup += `<div style="width: ${value}px; height: ${value}px; background-color: ${getRandomHexColor()}; margin-bottom: 10px" ></div>`;
  }
  return boxesMarkup;
}

const onDataCreateBtn = () => {
  const boxesMarkup = createBoxes(Number(ref.input.value));
  ref.boxes.insertAdjacentHTML("beforeend", boxesMarkup);
}

const onDataDestroyBtn = () => {
  ref.boxes.innerHTML = '';
};

ref.dataCreateBtn.addEventListener('click', onDataCreateBtn);
ref.dataDestroyBtn.addEventListener("click", onDataDestroyBtn);