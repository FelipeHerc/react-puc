const Exercicio1 = () => {
  const nome = 'Felipe';
  const sobreNome = 'Hercules';
  const idade = 25;
  const corFavorita = 'preto';

  const montaFrase = () => {
    return `Meu nome é ${nome} ${sobreNome}, tenho ${idade} anos e minha cor favorita é ${corFavorita}`
  }

  return (
    <div>
      <p>{montaFrase()}</p>
    </div>
  );
};

export default Exercicio1;