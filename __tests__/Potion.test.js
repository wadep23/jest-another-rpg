const { expect } = require('@jest/globals');
const Potion = require('../lib/Potion.js');

test ('creates a health potion object', () => {
    const potion = new Potion('health', 10);

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(10);
});