const forms = [
  document.getElementById('form1'),
  document.getElementById('form2'),
  document.getElementById('form3'),
];
const nextButtons = [
  document.getElementById('next1'),
  document.getElementById('next2'),
];
const backButtons = [
  document.getElementById('back1'),
  document.getElementById('back2'),
];

const progress = document.getElementById('progress');

let currentFormIndex = 0;

function updateProgressWidth() {
  const progressWidth = (currentFormIndex + 1) * 120;
  progress.style.width = `${progressWidth}px`;
}

function goToNextStep() {
  forms[currentFormIndex].style.left = '-450px';
  currentFormIndex++;
  forms[currentFormIndex].style.left = '40px';
  updateProgressWidth();
}

function goToPreviousStep() {
  forms[currentFormIndex].style.left = '450px';
  currentFormIndex--;
  forms[currentFormIndex].style.left = '40px';
  updateProgressWidth();
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

function showErrorMessage(message) {
  console.log(message);
}

function goToNextStepIfValidEmail() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  if (!email) {
    showErrorMessage('Email field is required.');
  } else if (!isValidEmail(email)) {
    showErrorMessage('Invalid email format.');
  } else {
    goToNextStep();
  }
}

nextButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (currentFormIndex < forms.length - 1) {
      goToNextStepIfValidEmail();
    }
  });
});

backButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (currentFormIndex > 0) {
      goToPreviousStep();
    }
  });
});
