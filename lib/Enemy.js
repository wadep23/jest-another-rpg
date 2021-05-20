function Enemy (name, weapon, health, strength, agility, potion) {
    this.name = name,
    this.weapon = weapon,
    this.health = health,
    this.strength = strength,
    this.agility = agility,
    this.potion = potion,

    getDescription = function() {
        return enemy;
    },

    getHealth = function() {
        return this.health;
    },

    getAttackValue = function() {
        return this.strength;
    },

    isAlive = function() {
        if (this.health > 0) {
            return this.name + ' is alive!';
        }else{
            return this.name + ' has been defeated!';
        }
    },

    reduceHealth = function() {

    }
}
module.exports = Enemy;