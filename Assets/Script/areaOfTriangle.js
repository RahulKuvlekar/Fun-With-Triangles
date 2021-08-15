const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const calculateBtn = document.querySelector("#calculate-Btn");
const outputSection = document.querySelector("#output-section");



const makeVisible = (element) => {
  element.classList.remove("notVisible");
};

const notVisible = (element) => {
  element.classList.add("notVisible");
};

calculateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");
  notVisible(outputSection);
  const firstSideValue = +firstSide.value;
  const secondSideValue = +secondSide.value;
  const thirdSideValue = +thirdSide.value;

  makeVisible(outputSection);
  if (
    firstSideValue + secondSideValue > thirdSideValue &&
    secondSideValue + thirdSideValue > firstSideValue &&
    firstSideValue + thirdSideValue > secondSideValue
  ) {
    const semiPerimeter =
      (firstSideValue + secondSideValue + thirdSideValue) / 2;

    const ans = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - firstSideValue) *
        (semiPerimeter - secondSideValue) *
        (semiPerimeter - thirdSideValue)
    ).toFixed(2);
    outputSection.textContent = `Area of a triangle using heron's formula is ${ans} units`;
    outputSection.style.color = "black";
  } else {
    outputSection.textContent = "Please Check Input";
    outputSection.style.color = "red";
  }
});
