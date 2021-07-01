class DonutMaker {
  constructor(numDonuts, numAutoClickers, costAutoClicker) {
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
    this.costAutoClicker = costAutoClicker;
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
  }
}

export default DonutMaker;
