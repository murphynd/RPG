import Character from "./../src/js/Character.js";

describe("Character", () => {
  test("should correctly create a triangle object with three lengths", () => {
    const KingArthur = new Character("King", "King Arthur", "Strong, Witty", 60);
    expect(KingArthur.type).toEqual("King");
    expect(KingArthur.name).toEqual("King Arthur");
    expect(KingArthur.inventory).toEqual([]);
    expect(KingArthur.attributes).toEqual("Strong, Witty");
    expect(KingArthur.hp).toEqual(60);
    expect(KingArthur.damage).toEqual(0);
  });

  // test('should correctly determine whether three lengths are not a triangle', () => {
  //   const notTriangle = new Triangle(3,9,22);
  //   expect(notTriangle.checkType()).toEqual("not a triangle");
  // });

  // test('should correctly determine whether three lengths make an isosceles triangle', () => {
  //   const isocTriangle = new Triangle(5,5,7)
  //   expect(isocTriangle.checkType()).toEqual("isosceles triangle");
  // });

  // test('should correctly determine whether three lengths make an scalene triangle', () => {
  //   const scalTriangle = new Triangle(2,3,4)
  //   expect(scalTriangle.checkType()).toEqual("scalene triangle");
  // });

  // test('should correctly determine whether three lengths make an equilateral triangle', () => {
  //   const equiTriangle = new Triangle(5,5,5)
  //   expect(equiTriangle.checkType()).toEqual("equilateral triangle");
  // });
});
