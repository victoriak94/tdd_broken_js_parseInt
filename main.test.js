const parseNumbers = require('./main.js');

test('can parse one number string', () => {
  expect(parseNumbers(['10'])).toEqual([10]);
});

test('can parse a list of number strings', () => {
  expect(parseNumbers(['10', '0', '-10'])).toEqual([10, 0, -10]);
});
