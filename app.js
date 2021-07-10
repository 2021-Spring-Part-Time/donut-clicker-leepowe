import DonutMaker from "./donutMaker.js";
const mainDonutButton = document.querySelector(".main__donut_button"),
  numDonutsDiv = document.getElementById("donuts"),
  mainAutoClickerButton = document.querySelector(".main__autoClicker_button"),
  numAutoClickersDiv = document.getElementById("autoClickers"),
  mainMultiplierButton = document.querySelector(".main__multiplier_button"),
  numMultipliersDiv = document.getElementById("multipliers"),
  myDonutMaker = new DonutMaker(0, 0, 100, 0, 10);

mainDonutButton.addEventListener("click", () => {
  myDonutMaker.addDonut();
  myDonutMaker.activateMultipliers();
  numDonutsDiv.innerHTML = myDonutMaker.numDonuts;
});

mainAutoClickerButton.addEventListener("click", () => {
  myDonutMaker.addAutoClicker();
  numAutoClickersDiv.innerHTML = myDonutMaker.numAutoClickers;
  numDonutsDiv.innerHTML = myDonutMaker.numDonuts;
  setInterval(function () {
    myDonutMaker.activateAutoClickers;
  }, 1000);
});

mainMultiplierButton.addEventListener("click", () => {
  myDonutMaker.addMultiplier();
  numMultipliersDiv.innerHTML = myDonutMaker.numMultipliers;
  numDonutsDiv.innerHTML = myDonutMaker.numDonuts;
});

function AutoButtonEnabler() {
  const myAutoClickerBttn = document.querySelector(".main__autoClicker_button");
  if (DonutMaker.activateAutoBttn()) {
    myAutoClickerBttn.disabled = false;
  } else {
    myAutoClickerBttn.disabled = true;
  }
}
AutoButtonEnabler();


function MultiButtonEnabler() {
  const myMultiBttn = document.querySelector(".main__multiplier_button");
  if (DonutMaker.activateMultiBttn()) {
    myMultiBttn.disabled = false;
  } else {
    myMultiBttn.disabled = true;
  }
}
MultiButtonEnabler();
