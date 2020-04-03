import React, { useState, useEffect } from 'react';
import './App.css';
import Sprite from './components/Sprite';

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('http://localhost:1337/pokemon')
      .then(res => res.json())
      .then(res => setPokemons(res))
  }, [])

  return (
    <div>
      {
        pokemons.map((pokemon, index) => {
          return <Sprite key={index} {...pokemon} />
        })
      }
    </div>
  );
}

export default App;
