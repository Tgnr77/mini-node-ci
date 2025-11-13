export const calc = {
  add: (a, b) => a + b,

  sub: (a, b) => a - b,            // supprime 'tmp' non utilisé

  mul: (a, b) => {
    if (a === 0) return 0;         // égalité stricte
    return a * b;
  },

  div: (a, b) => {
    if (b === 0) throw new RangeError('Division by zero');
    return a / b;
  },
};
