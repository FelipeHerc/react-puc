const Exercicio2 = () => {
  const alunos = [
    { nome: 'Cléber', nota: 80},
    { nome: 'Rogério', nota: 64},
    { nome: 'Mário', nota: 53},
    { nome: 'Daiane', nota: 86},
    { nome: 'Maria', nota: 72},
    { nome: 'João', nota: 31},
    { nome: 'Márcio', nota: 57},
    { nome: 'Jefferson', nota: 60},
    { nome: 'Marcela', nota: 93},
  ]
  return (
    <div>
      <p>Todos os alunos:</p>
      <ul>
        {alunos.map((aluno) => (
          <li>{aluno.nome}: {aluno.nota}</li>
        ))}
      </ul>
      <p>Alunos aprovados:</p>
      <ul>
        {alunos.filter((aluno) => aluno.nota >= 60).map((aluno) => (
          <li>{aluno.nome}: {aluno.nota}</li>
        ))}
      </ul>
      <p>Alunos reprovados:</p>
      <ul>
        {alunos.filter((aluno) => aluno.nota < 60).map((aluno) => (
          <li>{aluno.nome}: {aluno.nota}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercicio2;