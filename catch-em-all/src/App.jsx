import React from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import usePokemonApi from "./api/use-pokemon-api";
import PokemonList from './components/PokemonList';

function App() {
  const { pokemon, loading, catchPokemon } = usePokemonApi("http://localhost:1337");
  return (
    loading ? <LoadingSpinner /> : <PokemonList pokemon={pokemon} onCatch={(pokemon) => catchPokemon(pokemon)}/>
  );
}

export default App;
