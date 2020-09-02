import Character from "../src/js/Character.js";

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
});
