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

function validEmail() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  if (!email) {
    emailInput.placeholder = 'Email field is required!';
    emailInput.style.borderBottomColor = 'red';
  } else if (!isValidEmail(email)) {
    emailInput.style.borderBottomColor = 'red';
    emailInput.value = 'Email format is wrong -> example@gmail.com';
  }
}

function validPassword() {
  const password1 = document.getElementById('password1');
  const password1Value = password1.value;

  const password2 = document.getElementById('password2');
  const password2Value = password2.value;
  if (password1Value === '' && password2Value === '') {
    password1.placeholder = 'Please fill out!';
    password1.style.borderBottomColor = 'red';
    password2.placeholder = 'Passwords do not match!';
    password2.style.borderBottomColor = 'red';
  } else if (password1Value === password2Value) {
    console.log('Güzel');
    goToNextStep();
  }

  return;
}

function validUserName() {
  const firstName = document.getElementById('Fname').value;
  const valid_reg = /^[A-Za-z]\w+[A-Za-z0-9]$/;
  const valid_length = (firstName) =>
    firstName.length >= 4 && firstName.length <= 25;
  return valid_reg.test(firstName) && valid_length(firstName);
}

document.getElementById('submit').addEventListener('click', validUserName);
nextButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (currentFormIndex < forms.length - 1) {
      if (button.id === 'next1') {
        validEmail();
        validPassword();
      } else {
        goToNextStep();
      }
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
