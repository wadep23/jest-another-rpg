function Enemy (name, weapon, health, strength, agility, potion) {
    this.name = name,
    this.weapon = weapon,
    this.health = health,
    this.strength = strength,
    this.agility = agility,
    this.potion = potion
}

Enemy.prototype.getDescription = function() {
    return{
        name: this.name,
        weapon: this.weapon,
        health: this.health,
        strength: this.strength,
        agility: this.agility,
        potion: this.potion
    }
},

Enemy.prototype.getHealth = function() {
    return this.health;
},

Enemy.prototype.getAttackValue = function() {
    return this.strength;
},

Enemy.prototype.isAlive = function() {
    if (this.health > 0) {
        return this.name + ' is alive!';
    }else{
        return this.name + ' has been defeated!';
    }
},

Enemy.prototype.reduceHealth = function() {

}

module.exports = Enemy;