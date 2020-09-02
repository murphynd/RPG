import Enemy from "../src/js/Enemy.js";

describe("Enemy", () => {
  test("should correctly create a enemy", () => {
    const BlackKnight = new Enemy("Black Knight", 20, 60, 100);
    expect(BlackKnight.name).toEqual("Black Knight");
    expect(BlackKnight.inventory).toEqual([]);
    expect(BlackKnight.power).toEqual(20);
    expect(BlackKnight.hp).toEqual(60);
    expect(BlackKnight.damage).toEqual(0);
    expect(BlackKnight.chance).toEqual(100);
  });
});
