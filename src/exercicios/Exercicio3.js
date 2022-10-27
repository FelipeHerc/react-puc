import Filme from "../components/Filme";

const Exercicio3 = () => {
  const filmes = [
    { titulo: 'toy story', ano: '1995', imagem: 'https://upload.wikimedia.org/wikipedia/pt/a/a7/Toy_Story_1995.jpg' },
    { titulo: 'shrek', ano: '2001', imagem: 'https://upload.wikimedia.org/wikipedia/pt/e/e6/Shrek_Poster.jpg' },
    { titulo: 'kung fu panda', ano: '2008', imagem: 'https://upload.wikimedia.org/wikipedia/pt/7/76/Kungfupanda.jpg' },
  ]
  return (
    <div>
      <p>Filmes</p>
      {filmes.map((filme) => (
        <Filme titulo={filme.titulo} ano={filme.ano} imagem={filme.imagem} />
      ))}
    </div>
  );
};

export default Exercicio3;