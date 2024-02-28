function ComparaSenhas(senha1, senha2) {
    if (senha1 === senha2) {
      return 'Senhas iguais. Sucesso!';
    } else {
      throw new Error('Senhas diferentes. Erro!');
    }
  }
  
  module.exports = ComparaSenhas;
