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
  const inputList = document.querySelectorAll(`input[type="number"]`);

  const a = +inputList[0].value;
  const b = +inputList[1].value;
  makeVisible(outputSection);
  if (a === 0 || b === 0) {
    outputMsg.textContent = "Please Check Input";
    outputMsg.style.color = "red";
    return;
  } else {
    outputMsg.textContent = `Hypotenus ( c ) = ${Math.sqrt(a * a + b * b).toFixed(3)}`;
    return;
  }
});
