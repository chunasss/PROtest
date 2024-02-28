const ConversorDeBitcoin = require('./index');

test('ConversorDeBitcoin converte corretamente de Bitcoin para Real', () => {
  expect(ConversorDeBitcoin(1)).toBeCloseTo(taxaDeCambio); 
});