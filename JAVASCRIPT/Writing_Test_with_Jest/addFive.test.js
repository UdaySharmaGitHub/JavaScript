const {default : TestRunner } = require('jest-runner');
const addFive = require(`./addFive`);
test('returns the number plus 5', () =>{
    expect(addFive(1)).toBe(6);
})
