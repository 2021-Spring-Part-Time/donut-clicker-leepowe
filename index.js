let autoBtn = document.querySelector('main__autoClicker_button');

var donut = document.getElementById("donut"),
  donutsMade = 0,
  autoClickerCost = 100;

function makeDonut() {
  donutsMade++;

  var donuts = document.getElementById("donuts");

  donuts.innerHTML = donutsMade;
  if (donutsMade < autoClickerCost) autoBtn.disabled = true
  else autoBtn.disabled = false;
 
 
 
  //upgrade level for printing
  var upgradeLevel = document.getElementById("upgradeLevel");

  donuts.innerHTML = donutsMade;
  //automatic Granny upgrade to 2x
  if (donutsMade >= 30) {
    donutsMade += 2;
    upgradeLevel.innerHTML = "Granny Level";
  }

  //automatic factory upgrade to 10x
  if (donutsMade >= 500) {
    donutsMade += 10;
    upgradeLevel.innerHTML = "Factory Level";
  }

  //automatic plant upgrade to 30x
  if (donutsMade >= 1000) {
    donutsMade += 30;
    upgradeLevel.innerHTML = "Plant Level";
  }

  //automatic super factory upgrade to 1000x
  if (donutsMade >= 100000) {
    donutsMade += 1000;
    upgradeLevel.innerHTML = "Super-Plant Level";
  }
}