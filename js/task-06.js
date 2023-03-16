const inputRef = document.querySelector("#validation-input");

const onInput = ({ currentTarget: curTarg }) => {
  curTarg.classList.remove("valid", "invalid");
  curTarg.classList.add(
    curTarg.value.length === Number(curTarg.dataset.length)
      ? "valid"
      : "invalid"
  );

}

inputRef.addEventListener('blur', onInput);

// const inputEl = document.querySelector("#validation-input");
// inputEl.addEventListener("blur", (event) => {
//   const input = event.target.value.length;
//   const validation = Number(event.target.dataset.length);
//   event.target.classList.toggle("valid", input === validation);
//   event.target.classList.toggle("invalid", input !== validation);
// });

// If included, turns the toggle into a one way-only operation. If set to false, then token will only be removed, but not added. If set to true, then token will only be added, but not removed.