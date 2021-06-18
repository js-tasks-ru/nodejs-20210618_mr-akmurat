function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('...ops');
  }
  return a + b;
}

module.exports = sum;
