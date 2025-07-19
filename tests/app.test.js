const { calculateSum, getWelcomeMessage } = require('../src/utils');

describe('Application Tests', () => {
  test('calculateSum adds 1 + 2 to equal 3', () => {
    expect(calculateSum(1, 2)).toBe(3);
  });

  test('calculateSum handles negative numbers', () => {
    expect(calculateSum(-1, 1)).toBe(0);
  });

  test('getWelcomeMessage returns correct message', () => {
    expect(getWelcomeMessage()).toBe('Welcome to our DevOps Demo Application!');
  });
});
