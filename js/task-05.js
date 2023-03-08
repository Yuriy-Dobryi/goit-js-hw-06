const ref = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
}

const onInput = ({ currentTarget }) =>
(ref.nameOutput.textContent =
  !currentTarget.value ? "Anonymous" : currentTarget.value);

ref.nameInput.addEventListener('input', onInput);