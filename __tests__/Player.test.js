const { expect } = require('@jest/globals');
const Player = require('../lib/Player.js');

test ('creates a health potion object', () => {
    const bard = new Player('Wade', 100, 50, 65);

    expect(bard.name).toBe('Wade');
    expect(bard.health).toBe(100);
    expect(bard.strength).toBe(50);
});