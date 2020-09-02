export default class Character {
  constructor(name, power, hp, chance) {
    this.name = name;
    this.inventory = [];
    this.power = power; // highest possible hit
    this.hp = hp;
    this.damage = 0;
    this.chance = chance; // this will be percent of chance the hit lands
  }
}
