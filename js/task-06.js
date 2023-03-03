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