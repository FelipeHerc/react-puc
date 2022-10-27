import { useState } from "react";

const Exercicio6 = () => {
  const [valorInput, setValorInput] = useState('')

  const frutas = [
    'banana',
    'maçã',
    'morango',
    'uva',
    'laranja',
    'melancia',
    'maracujá',
    'pêra',
    'melão',
    'kiwi',
  ];

  return (
    <div>
      <input type="text" value={valorInput} onChange={(event) => { setValorInput(event.target.value) }} />
      <ul>
        {valorInput === '' && frutas.map((fruta) => (
          <li>
            {fruta}
          </li>
        ))}
        {frutas.filter((fruta) => fruta.includes(valorInput)).map((fruta) => (
          <li>{fruta}</li>
        ))}
      </ul>
    </div>
  )
};

export default Exercicio6;