import throttle from '../../node_modules/lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const feedbackFormStateKey = 'feedback-form-state';

const getSavedFormState = () => {
  const savedState = localStorage.getItem(feedbackFormStateKey);
  if (savedState) {
    return JSON.parse(savedState);
  }
  return {};
};

const saveFormState = throttle(state => {
  localStorage.setItem(feedbackFormStateKey, JSON.stringify(state));
}, 500);

const fillFormFields = () => {
  const savedFormState = getSavedFormState();
  emailInput.value = savedFormState.email || '';
  messageTextarea.value = savedFormState.message || '';
};

feedbackForm.addEventListener('input', event => {
  const { name, value } = event.target;
  const formState = getSavedFormState();
  const updatedState = {
    ...formState,
    [name]: value
  };
  saveFormState(updatedState);
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const savedFormState = getSavedFormState();

  localStorage.removeItem(feedbackFormStateKey);
  emailInput.value = '';
  messageTextarea.value = '';

  console.log(savedFormState);
});

fillFormFields();