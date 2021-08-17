const quizForm = document.getElementById("question-section");
const submitBtn = document.querySelector("#submit-Btn");
const outputSection = document.querySelector("#output-section");
const answerList = ["Yes", "No", "Yes", "Scalene", "Both"];
const radioBtn = quizForm.querySelectorAll("input[type=radio]");

const clearRadiobtn = () => {
  radioBtn.forEach((element) => {
    element.checked = false;
  });
};
const makeVisible = (element) => {
  element.classList.remove("notVisible");
};

const notVisible = (element) => {
  element.classList.add("notVisible");
};

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(radioBtn);
  let score = 0,
    idx = 0;
  const formResult = new FormData(quizForm);

  for (let value of formResult.values()) {
    console.log(value, " === ", answerList[idx]);
    if (value === answerList[idx]) {
      score++;
    }
    idx++;
  }
  outputSection.textContent = "Your SCORE IS " + score;
  makeVisible(outputSection);
  clearRadiobtn();
});
