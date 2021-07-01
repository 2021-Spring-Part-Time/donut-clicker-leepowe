import DonutMaker from "./donutMaker";

describe("the creation of DonutMaker", () => {
  test("Does it add a donut?", () => {
    const underTest = new DonutMaker(0, 0);
    underTest.addDonut();
    expect(underTest.numDonuts).toEqual(1);
  });

  test('Can it purchase an autoclicker and remove spent donuts?', ()=>{
      const underTest = new DonutMaker(100, 0);
      underTest.addAutoClicker();
      expect(underTest.numAutoClickers).toEqual(1);
      expect(underTest.numDonuts).toEqual(0);
  })
  test('Should not allow autoclicker purchase with 99 Donuts', ()=>{
    const underTest = new DonutMaker(99, 0);
    underTest.addAutoClicker();
    expect(underTest.numAutoClickers).toEqual(0);
  })
  test('Will add donuts increase by the amount of autoclickers present when fired.', ()=>{
      const underTest = new DonutMaker(110, 2);
      underTest.activateAutoClickers();
      expect(underTest.numDonuts).toEqual(112);
  })
});