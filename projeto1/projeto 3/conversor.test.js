const ComparaSenhas = require('./index');

test('ComparaSenhas retorna mensagem de sucesso para senhas iguais', () => {
  expect(() => ComparaSenhas('senha123', 'senha123')).not.toThrow();
  expect(ComparaSenhas('senha123', 'senha123')).toBe('Senhas iguais. Sucesso!');
});

test('ComparaSenhas lança um erro para senhas diferentes', () => {
  expect(() => ComparaSenhas('senha123', 'outraSenha')).toThrowError('Senhas diferentes. Erro!');
});
