const moduleExists = require('./index');

test('module exists', () => {
  expect(moduleExists('fs')).toBe(true);
  expect(moduleExists('module')).toBe(true);
});

test('module not exists', () => {
  expect(moduleExists('redis')).toBe(false);
  expect(moduleExists('nodeunit')).toBe(false);
  expect(moduleExists('foo')).toBe(false);
});
