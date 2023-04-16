import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
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

// import throttle from 'lodash.throttle';
// const FEEDBACK_FS = 'feedback-form-state';
// let userData = {};
// const feedbackForm = document.querySelector('.feedback-form');
// const input = document.querySelector('input');
// const textarea = document.querySelector('textarea');

// feedbackForm.addEventListener('input', throttle(onFormInput, 500));

// feedbackForm.addEventListener('submit', onFormSubmit);

// fillInputs();

// function onFormInput(e) {
//   // console.dir(e.target.name);
//   userData[e.target.name] = e.target.value;
//   // console.log(userData[e.target.name]);
//   localStorage.setItem(FEEDBACK_FS, JSON.stringify(userData));
// }

// function onInput(e) {
//   //   allValues.email = e.currentTarget.elements.email.value;
//   //   allValues.message = e.currentTarget.elements.message.value;

//   //   localStorage.setItem(STORAGE_KEY, JSON.stringify(allValues));
//   // }
// function fillInputs() {
//   const savedData = JSON.parse(localStorage.getItem(FEEDBACK_FS));
//   if (savedData) {
//     input.value = savedData.email;
//     textarea.value = savedData.message;
//     userData = savedData;
//   }
// }
// function onFormSubmit(e) {
//   e.preventDefault();
//   if (input.value === '' || textarea.value === '') {
//     return;
//   }
//   e.currentTarget.reset();
//   localStorage.removeItem(FEEDBACK_FS);
//   console.log(userData);
//   userData = {};
// }
