export default class Game {
  constructor() {
    this.player = [];
    this.playerIndex = 0;
  }
  addPlayer(playerToAdd) {
    this.player.push(playerToAdd);
    return this.player;
  }
  nextPlayer() {
    if (this.playerIndex + 1 < this.player.length) {
      this.playerIndex++;
    } else {
      this.playerIndex = 0;
    }
  }
  fight() {}
}
