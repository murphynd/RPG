import Game from "../src/js/GamePlay.js";

describe("Game", () => {
  test("will gather players into game enviorment", () => {
    const Quest = new Game();
    expect(Quest.player).toEqual([]);
    expect(Quest.playerIndex).toEqual(0);
  });
  test("register king Authur into game", () => {
    const Quest = new Game();
    Quest.PlayerSelect();
    expect(Quest.player).toEqual(this.name);
  });
  test("will populate array with PlayerSelect modifer", () => {
    const Quest = new Game();
    Quest.PlayerSelect(KingArthur);
    expect(Quest.player[0]).toEqual(KingArthur);
  });
  test("player will change in the player index", () => {
    const Quest = new Game();
    Quest.PlayerSelect("bob");
    Quest.PlayerSelect("mike");
    Quest.nextPlayer();
    expect(Quest.playerIndex).toEqual(1);
  });
});
