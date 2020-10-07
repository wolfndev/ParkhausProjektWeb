const placenumbers = require('./place_numbers')
maximal = 150
test('Should have the output true', () => {
  expect(placenumbers(10)).toBe("true")
});

test('Should have the output false', () => {
  expect(placenumbers(0)).toBe("false")
});

test('Should have the output true', () => {
  expect(placenumbers(150)).toBe("true")
});
