const form = document.querySelector("form.login-form");


const onFormSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    alert("All fields must be filled!");
  }
  else {
    const formData = new FormData(event.currentTarget)
    
    formData.forEach((value, property) => console.log(`${property}: ${value}`));
    event.currentTarget.reset();
  }
}


form.addEventListener('submit', onFormSubmit)