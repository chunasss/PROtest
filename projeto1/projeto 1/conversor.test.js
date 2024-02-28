const ConversorDeTemperatura = require('./index');

test('ConversorDeTemperatura converte corretamente de Celsius para Fahrenheit', () => {
  expect(ConversorDeTemperatura(0)).toBe(32);
  expect(ConversorDeTemperatura(100)).toBe(212);
});