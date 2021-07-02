class DonutMaker {
  constructor(numDonuts, numAutoClickers, costAutoClicker, numMultipliers, costMultiplier) {
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
    this.costAutoClicker = costAutoClicker;
    this.numMultipliers = numMultipliers;
    this.costMultiplier = costMultiplier;
  }

  addDonut() {
    this.numDonuts++;
  }

  addAutoClicker() {
    if (this.numDonuts >= this.costAutoClicker) {
      this.numAutoClickers++;
      this.numDonuts -= this.costAutoClicker;
      this.costAutoClicker = this.costAutoClicker / 10 + this.costAutoClicker;
    }
  }

  activateAutoClickers() {
    if (this.numAutoClickers > 0) {
      this.numDonuts += this.numAutoClickers * 1;
    }
    activateMultipliers();
  }

  addMultiplier(){
    if (this.numDonuts >= this.costMultiplier)
    this.numMultipliers++;
    this.numDonuts -= this.costMultiplier;
    this.costMultiplier = this.costMultiplier / 10 + this.costMultiplier;
  }

  activateMultipliers() {
      if (this.numMultipliers > 0) {
          this.numDonuts = Math.pow(1.2, this.numMultipliers);
      }
  }
}

export default DonutMaker;
