export default class Character {
  constructor(name, attributes, hp, chance) {
    this.type; // this will be a hero or enemy
    this.name = name;
    this.inventory = [];
    this.attributes = attributes;
    this.hp = hp;
    this.damage = 0;
    this.chance = chance; // this will be percent of chance the hit lands
  }
  Hero() {
    this.type = "Hero";
  }
  Enemy() {
    this.type = "Enemy";
  }
}
