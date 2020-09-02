import Character from "../src/js/Character.js";

describe("Character", () => {
  test("should correctly create a triangle object with three lengths", () => {
    const KingArthur = new Character("King Arthur", "Strong, Witty", 60, 80);
    expect(KingArthur.name).toEqual("King Arthur");
    expect(KingArthur.inventory).toEqual([]);
    expect(KingArthur.attributes).toEqual("Strong, Witty");
    expect(KingArthur.hp).toEqual(60);
    expect(KingArthur.damage).toEqual(0);
    expect(KingArthur.chance).toEqual(80);
  });
  test("this will add type of player to character", () => {
    const KingArthur = new Character("King Arthur", "Strong, Witty", 60, 80);
    const BlackKnight = new Character("The Black Knight", "Persistant, dim", 100, 50);
    KingArthur.Hero();
    BlackKnight.Enemy();
    expect(KingArthur.type).toEqual("Hero");
    expect(BlackKnight.type).toEqual("Enemy");
  });
});
