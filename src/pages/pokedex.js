import { useState, useEffect } from "react";

const Pokedex = () => {
  const [generation, setGeneration] = useState('1');
  const [pokemonIds, setPokemonIds] = useState([]);

  console.log(pokemonIds);

  function numberRange (start, end) {
    return new Array(end - start + 1).fill().map((d, i) => i + start);
  }

  useEffect(() => {
    console.log(generation);
    if (generation === '1') setPokemonIds(numberRange(1, 151))
    if (generation === '2') setPokemonIds(numberRange(152, 251))
    if (generation === '3') setPokemonIds(numberRange(252, 286))
    if (generation === '4') setPokemonIds(numberRange(252, 286))
    if (generation === '5') setPokemonIds(numberRange(494, 649))
    if (generation === '6') setPokemonIds(numberRange(650, 721))
    if (generation === '7') setPokemonIds(numberRange(722, 809))
    if (generation === '8') setPokemonIds(numberRange(810, 905))
  }, [generation])

  return (
    <div>
      <span>Geração: </span>
      <select value={generation} onChange={(event) => setGeneration(event.target.value)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
      </select>
      {pokemonIds.map((pokemonId) => (<p>{pokemonId}</p>))}
    </div>
  )
};

export default Pokedex;

