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
    emailInput.placeholder = 'Email FİELD İS REQUİRED!';
    emailInput.style.borderBottomColor = 'red';
  } else if (!isValidEmail(email)) {
    emailInput.style.borderBottomColor = 'red';
  } else {
    goToNextStep();
  }
}

function passwordMatch() {
  const password1 = document.getElementById('password1').value;
  const password2 = document.getElementById('password2').value;

  return password1 === password2;
}

nextButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (currentFormIndex < forms.length - 1) {
      if (button.id === 'next1') {
        if (!passwordMatch()) {
          console.log('Passwords do not match, cannot proceed.');
          return;
        }
      }
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
