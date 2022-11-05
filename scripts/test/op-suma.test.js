const {suma} = require('../op-suma');

test('adds 1 + 2 to equal 3', () => {
    expect(suma(1, 2)).toBe(3);
  });

test('adds 10 + NaN to equal NaN', () => {
    expect(suma(10, NaN)).toBe(NaN);
  });

test('adds -1 + hola to equal -1hola', () => {
    expect(suma(-1, "hola")).toBe("-1hola");
  });

test('adds 0.1 + 0.2 to equal 0.3', () => {
    //expect(suma(0.1, 0.2)).toBe(0.3);
    expect(suma(0.1, 0.2)).toBeCloseTo(0.3); //Para que no arroje error en el decimal
  });



