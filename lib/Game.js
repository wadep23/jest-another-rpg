function Game(roundNumber, isPlayerTurn, enemies, currentEnemy, player){
    this.roundNumber = roundNumber,
    this.isPlayerTurn = isPlayerTurn,
    this.enemies = enemies,
    this.currentEnemy = currentEnemy,
    this.player = player,

    initializeGame = function() {

    },

    battle = function() {

    },

    checkEndOfBattle = function() {
        if (player.health <= 0) {
            return 'Game Over!';
        } else if (currentEnemy.health <= 0){
            return 'Congratulations Warrior, You are Victorious!'
        }
    },

    startNewBattle = function() {
        
    }
}
module.exports = Game