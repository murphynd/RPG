export default class Game {
  constructor() {
    this.player = [];
    this.playerIndex = 0;
  }

  addPlayer(playerToAdd) {
    this.player.push(playerToAdd);
  }
  nextPlayer() {
    if (playerIndex + 1 < Player.length) {
      playerIndex++;
    } else {
      playerIndex = 0;
    }
  }
}
