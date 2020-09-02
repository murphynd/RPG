import Game from "../src/js/GamePlay.js";

describe("Game", () => {
  test("will gather players into game enviorment", () => {
    const Quest = new Game();
    expect(Quest.player).toEqual([]);
    expect(Quest.playerIndex).toEqual(0);
  });
  test("will populate array with addPlayer modifer", () => {
    const Quest = new Game();
    Quest.addPlayer("bob");
    expect(Quest.player[0]).toEqual("bob");
  });
  test("player will change in the player index", () => {
    const Quest = new Game();
    Quest.addPlayer("bob");
    Quest.addPlayer("mike");
    Quest.nextPlayer();
    expect(Quest.playerIndex).toEqual(1);
  });
});
