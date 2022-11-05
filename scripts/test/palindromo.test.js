const {palindromo} = require('../palindromo');

test('Una palabra es palíndromo', () => {
    expect(palindromo("Ana")).toBe(true);
});

test('Una palabra es palíndromo', () => {
    expect(palindromo("Bob")).toBe(true);
});

test('Una palabra es palíndromo', () => {
    expect(palindromo("Radar")).toBe(true);
});

test('Es palíndromo', () => {
    expect(palindromo("Reconocer")).toBe(true);
});

test('Es palíndromo', () => {
    expect(palindromo("Nos quejamos")).toBe(false);
});

test('Es palíndromo', () => {
    expect(palindromo("Saoko")).toBe(false);
});

test('Es palíndromo', () => {
    expect(palindromo("Somos o no somos")).toBe(true);
});

