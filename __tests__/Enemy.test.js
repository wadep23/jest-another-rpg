const { expect } = require('@jest/globals');
const Enemy = require('../lib/Enemy.js');

test ('Tests the creation of a new enemy.', () => {
    const barbarian = new Enemy ('Grog', 'Craven Edge', 200, 100, 20)

    expect(barbarian.name).toBe('Grog');
    expect(barbarian.weapon).toBe('Craven Edge');
    expect(barbarian.health).toBe(200);

    console.log(barbarian.getDescription());
});