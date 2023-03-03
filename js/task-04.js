const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};
let counterValue = 0;

const onClickIncrementBtn = () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
const onClickDecrementBtn = () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

refs.decrementBtn.addEventListener('click', onClickDecrementBtn)
refs.incrementBtn.addEventListener('click', onClickIncrementBtn);