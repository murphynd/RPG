import Character from "../src/js/Character.js";

describe("Character", () => {
  test("should correctly create a triangle object with three lengths", () => {
    const KingArthur = new Character("King Arthur", 20, 60, 80);
    expect(KingArthur.name).toEqual("King Arthur");
    expect(KingArthur.inventory).toEqual([]);
    expect(KingArthur.power).toEqual(20);
    expect(KingArthur.hp).toEqual(60);
    expect(KingArthur.damage).toEqual(0);
    expect(KingArthur.chance).toEqual(80);
  });
});
