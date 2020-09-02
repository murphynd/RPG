export default class Character {
  constructor(type, name, attributes, hp) {
    this.type = type;
    this.name = name;
    this.inventory = [];
    this.attributes = attributes;
    this.hp = hp;
    this.damage = 0;
  }
}
