const { expect } = require('@jest/globals');
const Player = require('../lib/Player.js');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

// test("gets player's stats as an object", () => {
//     const player = new Player('Dave');
  
//     expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));

//   });

//   test('gets inventory from player or returns false', () => {
//     const player = new Player('Dave');
  
//     expect(player.getInventory()).toEqual(expect.any(Array));
  
//     player.inventory = [];
  
//     expect(player.getInventory()).toEqual(false);
//   });

// test('checks if player is alive or not', () => {
//     const player = new Player('Dave');
  
//     expect(player.isAlive()).toBeTruthy();
  
//     player.health = 0;
  
//     expect(player.isAlive()).toBeFalsy();
//   });

test("subtracts from player's health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;
  
    player.reduceHealth(5);
  
    expect(player.health).toBe(oldHealth - 5);
  
    player.reduceHealth(99999);
  
    expect(player.health).toBe(0);
  });