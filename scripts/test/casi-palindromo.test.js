const {casiPalindromo} = require('../casi-palindromo');

test('Una palabra es palíndromo', () => {
    expect(casiPalindromo("Ni perdon ni olvido")).toBeCloseTo(false);
});