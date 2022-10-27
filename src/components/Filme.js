const Filme = (props) => {
  const { titulo, ano, imagem } = props;
  
  return (
    <div>
      <p>{titulo}, lançado em {ano}</p>
      <img src={imagem} alt="" />
    </div>
  )
};

export default Filme;