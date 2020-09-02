import Game from "../src/js/GamePlay.js";

describe("Game", () => {
  test("will gather players into game enviorment", () => {
    const Quest = new Game([]);
    expect(Quest.player).toEqual([]);
    expect(Quest.playerIndex).toEqual(0);
  });
});
