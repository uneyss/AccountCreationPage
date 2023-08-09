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

nextButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (currentFormIndex < forms.length - 1) {
      goToNextStep();
    }
  });
});

backButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (currentFormIndex > 0) {
      goToPreviousStep();
    }
  });
});
