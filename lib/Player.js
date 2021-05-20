const Potion = require("./Potion");

function Player (name, health, strength, agility) {
    this.name = name,
    this.health = health,
    this.strength = strength,
    this.agility = agility,

    getStats = function() {
        return player;
    },

    getInventory = function() {

    },

    getHealth = function() {
        return this.health;
    },

    getAttackValue = function() {
        return this.strength;
    },

    isAlive = function(){
        if (this.health > 0){
            return this.name + ' is alive!';
        }else{
            return this.name + ' has been defeated!';
        }
    },

    addPotion = function() {
        return potion++
    },

    usePotion = function() {
        if (potion.name === health){
            return potion.value + this.health;
        }else if (potion.name === strength){
            return potion.value + this.strength;
        }else{
            return potion.value + this.agility;
        }
    },

    reduceHealth = function() {
        
    }
}
module.exports = Player