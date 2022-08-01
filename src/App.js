// import * as React from "react";
// import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  const getRandomPokemon = () => {
    const random = Math.floor(Math.random() * 151) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  };

  return (
    <div className="display">
      <div className="card">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt="pokemon"
        />
        <h1>{pokemon.name}</h1>
        <h2>Height : {pokemon.height}</h2>
        <h2>Weight : {pokemon.weight}</h2>
        <h2>Types:</h2>
        <ul>
          {pokemon.types.map((type) => (
            <li>{type.type.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={getRandomPokemon}>Generate random pokemon</button>
    </div>
  );
};

export default App;
