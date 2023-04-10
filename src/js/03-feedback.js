const form = document.querySelector('.feedback-form');
const submitButton = document.querySelector("[type ='submit']");
const emailInput = document.querySelector("[name='email']");
const messageEl = document.querySelector('[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

setInputValues();

form.addEventListener('input', onInput);
function onInput(e) {
  const emailValue = e.currentTarget.elements.email.value;
  const messageValue = e.currentTarget.elements.message.value;
  const allValues = {};
  allValues.email = emailValue;
  allValues.message = messageValue;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(allValues));
}

function setInputValues() {
  const savedValues = localStorage.getItem(STORAGE_KEY);
  const parsedSavedValues = JSON.parse(savedValues);
  if (parsedSavedValues) {
    emailInput.value = parsedSavedValues.email;
    messageEl.value = parsedSavedValues.message;
  }
}

// submitButton.addEventListener('click', onSubmitButton);
// function onSubmitButton(e) {
//   localStorage.clear();
//   console.log(localStorage.getItem(STORAGE_KEY));
// }

// const savedValues = localStorage.getItem(JSON.parse(STORAGE_KEY));
// e.currentTarget.elements.message.value = obj.message;
// e.currentTarget.elements.email.value = obj.email;
// console.log(savedValues);

// function setInputValues(obj) {
//   e.currentTarget.elements.message.value = obj.message;
//   e.currentTarget.elements.email.value = obj.email;
// }
