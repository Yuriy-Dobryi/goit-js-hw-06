const fontSizeControlRef = document.querySelector("#font-size-control");

const onInput = ({ currentTarget: curTarg }) => {
  document.querySelector("#text").style.fontSize = `${curTarg.value}px`;
}

fontSizeControlRef.addEventListener("input", onInput);