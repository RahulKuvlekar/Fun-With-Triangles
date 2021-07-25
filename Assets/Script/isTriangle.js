const cl = console.log;

const outputSection = document.getElementById("output-section");
const outputMsg = document.getElementById("output-msg");

const checkBtn = document.getElementById("checkBtn");

const makeVisible = (element) => {
  element.classList.remove("notVisible");
};

const notVisible = (element) => {
  element.classList.add("notVisible");
};

checkBtn.addEventListener("click", () => {
  notVisible(outputSection);
  const inputList = document.querySelectorAll(`input[type="number"]`);

  const a = +inputList[0].value;
  const b = +inputList[1].value;
  const c = +inputList[2].value;
  makeVisible(outputSection);
  if (a === 0 || b === 0 || c === 0) {
    outputMsg.textContent = "Please Check Input";
    outputMsg.style.color = "red";
    return;
  }

  if (a + b + c === 180) {
    outputMsg.textContent = "Yuhu! these angles can make a TRIANGLE";
    return;
  } else {
    outputMsg.textContent = "Oops! these angles cannot make a TRIANGLE";
    return;
  }
});
