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
  let boxesMarkup = boxes.innerHTML;
  let size;
  if (ref.boxes.children.length > 0) {
    size = parseInt(ref.boxes.lastElementChild.style.width) + 10;
    console.log(size);
  }
  else {
    size = 30;
  }
  
  for (let index = 0; index < amount; index += 1) {
    boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin-bottom: 10px" ></div>`;
    console.log(size);
    size += 10;
  }
  console.log(size);
  return boxesMarkup;
}

const onDataCreateBtn = () => {
  const boxesMarkup = createBoxes(Number(ref.input.value));
  ref.boxes.insertAdjacentHTML("beforeend", boxesMarkup);
  ref.input.value = 0;
}

const onDataDestroyBtn = () => {
  ref.boxes.innerHTML = '';
};

ref.dataCreateBtn.addEventListener('click', onDataCreateBtn);
ref.dataDestroyBtn.addEventListener("click", onDataDestroyBtn);