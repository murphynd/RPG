import Enemy from "./Enemy.js";
import Character from "./Character.js";

export default class Game {
  constructor() {
    this.player = [];
    this.playerIndex = 0;
    this.foe = Enemy;
  }
  PlayerSelect(select) {
    select = new Character("King Arthur", 20, 60, 80);
    this.player.push(Character);
    return this.player;
  }
  nextPlayer() {
    if (this.playerIndex + 1 < this.player.length) {
      this.playerIndex++;
    } else {
      this.playerIndex = 0;
    }
  }
  attack() {
    let playerattack = Math.ceil(Math.random() * this.player.power);
    this.player.damage += playerattack;
    Enemy.hp -= playerattack;
    this.player.damage = 0;
    nextPlayer();
  }
}
//WATCHING THE YOUTUBE
