import DonutMaker from "./donutMaker";

describe("the creation of DonutMaker", () => {
  test("Does it add a donut?", () => {
    const underTest = new DonutMaker(0, 0, 0, 0, 0);
    underTest.addDonut();
    expect(underTest.numDonuts).toEqual(1);
  });

  test("Can it purchase an autoclicker and remove spent donuts?", () => {
    const underTest = new DonutMaker(100, 0, 100, 0, 10);
    underTest.addAutoClicker();
    expect(underTest.numAutoClickers).toEqual(1);
    expect(underTest.numDonuts).toEqual(0);
  });
  test("Should not allow autoclicker purchase with 99 Donuts", () => {
    const underTest = new DonutMaker(99, 0, 100, 0, 10);
    underTest.addAutoClicker();
    expect(underTest.numAutoClickers).toEqual(0);
  });
  test("Will add donuts increase by the amount of autoclickers present when fired.", () => {
    const underTest = new DonutMaker(110, 2, 100, 0, 10);
    underTest.activateAutoClickers();
    expect(underTest.numDonuts).toEqual(112);
  });
  test("Second autoclicker will cost an additional 10%", () => {
    const underTest = new DonutMaker(200, 1, 100, 0, 10);
    underTest.addAutoClicker();
    expect(underTest.costAutoClicker).toEqual(110);
  });
  test("Second autoclicker will cost an additional 10%", () => {
    const underTest = new DonutMaker(200, 1, 110, 0, 10);
    underTest.addAutoClicker();
    expect(underTest.costAutoClicker).toEqual(121);
  });

  //multipliers
  test("Can it purchase a multiplier and remove spent donuts?", () => {
    const underTest = new DonutMaker(10, 0, 100, 0, 10);
    underTest.addMultiplier();
    expect(underTest.numMultipliers).toEqual(1);
    expect(underTest.numDonuts).toEqual(0);
  });
  test("Should not allow multiplier purchase with 9 Donuts", () => {
    const underTest = new DonutMaker(9, 0, 100, 0, 10);
    underTest.addMultiplier();
    expect(underTest.numMultipliers).toEqual(0);
  });
  test("Will add donuts increase by the amount of multipliers present when fired.", () => {
    const underTest = new DonutMaker(110, 2, 100, 1, 10);
    underTest.activateMultipliers();
    expect(underTest.numDonuts).toEqual(1.2);
  });
  test("Second multiplier will cost an additional 10%", () => {
    const underTest = new DonutMaker(200, 1, 100, 0, 10);
    underTest.addMultiplier();
    expect(underTest.costMultiplier).toEqual(11);
  });
  test("Additional multiplier will cost an additional 10%", () => {
    const underTest = new DonutMaker(200, 1, 110, 1, 11);
    underTest.addMultiplier();
    expect(underTest.costMultiplier).toEqual(12.1);
  });
});
