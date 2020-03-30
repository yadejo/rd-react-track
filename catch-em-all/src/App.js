import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('http://localhost:1337/pokemon')
      .then(res => res.json())
      .then(res => setPokemons(res))
  },[])

  return (
    <div>
      {
        pokemons.map(p => {
          return <img alt={p.name} src={p.sprite}></img>
        })
      }
    </div>
  );
}

export default App;
