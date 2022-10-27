import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/generation/1').then((response) => setPokemonList(response.data.pokemon_species))
  }, [])

  useEffect(() => {
    pokemonList.forEach(pokemon => axios.get(pokemon.url).then(response => [...pokemonData, setPokemonData(response.data)]))
  }, [pokemonList])

  console.log(pokemonList);

  return (
    pokemonList.map((pokemon) => (
      <div>
        <p>{pokemon.name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`} alt="" />
      </div>
    ))
  )
};

export default Home;