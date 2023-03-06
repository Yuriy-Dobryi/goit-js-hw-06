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
  let boxesMarkup = '';
  let size;
  // Якщо кількість елементів (дітей) блоку 'boxes' більше ніж 1, значить змінна 'size' буде мати значення останнього елемента, а саме його розмір 
  if (ref.boxes.children.length > 0)
    size = parseInt(ref.boxes.lastElementChild.style.width) + 10;
  // Якщо ж ні, то це значить що блок пустий, а тому 'size' буде дорівнювати 30
  else
    size = 30;
  // І лише тепер створюємо розмітку таким чином, щоб нам уже було не важливо, чи були там бокси до кліку додавання, чи ні, так як вище ми все це врахували, і тепер відбувається звичайний процес генерування нової розмітки, яка або буде додаватись до уже створеної, або просто буде створена якщо такої немає але користувач захотів додати
  for (let index = 0; index < amount; index += 1, size += 10) {
    boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin-bottom: 10px" ></div>`;
  }
  return boxesMarkup;
}

const onDataCreateBtn = () => {
  const boxesMarkup = createBoxes(Number(ref.input.value));
  ref.boxes.insertAdjacentHTML("beforeend", boxesMarkup);
  // тепер ти задоволена ?)
  ref.input.value = '';
}

const onDataDestroyBtn = () => {
  ref.boxes.innerHTML = '';
};

ref.dataCreateBtn.addEventListener('click', onDataCreateBtn);
ref.dataDestroyBtn.addEventListener("click", onDataDestroyBtn);