import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
// const submitButton = document.querySelector("[type ='submit']");
const emailInput = document.querySelector("[name='email']");
const messageEl = document.querySelector('[name="message"]');
const STORAGE_KEY = 'feedback-form-state';
const allValues = {};

function setInputValues() {
  const savedValues = localStorage.getItem(STORAGE_KEY);
  const parsedSavedValues = JSON.parse(savedValues);
  if (parsedSavedValues) {
    emailInput.value = parsedSavedValues.email;
    messageEl.value = parsedSavedValues.message;
  }
}

setInputValues();

form.addEventListener('input', onInput);
function onInput(e) {
  allValues.email = e.currentTarget.elements.email.value;
  allValues.message = e.currentTarget.elements.message.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(allValues));
}

form.addEventListener('submit', throttle(onSubmit, 500));

function onSubmit(e) {
  e.preventDefault();
  localStorage.clear();
  console.log(allValues);
  form.reset();
}
