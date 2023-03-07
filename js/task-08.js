const form = document.querySelector("form.login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = {
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  };

  if (!formData.email || !formData.password) {
    return alert("All fields must be filled!");
  }
    console.log(formData);
    event.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit)