import React, { useState, useEffect } from "react";
import PokemonThumbnail from "./PokemonThumbnail";

const PokemonList = ({ pokemon, onCatch }) => (
  <div className="PokemonList">
    {pokemon.map(pokemon => (
      <PokemonThumbnail
        key={pokemon.id}
        id={pokemon.id}
        sprite={pokemon.sprite}
        onClick={() => onCatch(pokemon)}
      />
    ))}
  </div>
);



export default PokemonList;
