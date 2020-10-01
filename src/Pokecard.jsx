import React from "react";
import "./pokecard.css";

function Pokecard({ pokemon }) {
  const { id, name, type, base_experience } = pokemon;
  let pokeNumber = id.toString().padStart(3, '0');

  return (
    <div id={id} className="Pokecard">
      <h2 className="Pokecard-name">{name}</h2>
      <img
        className="Pokecard-img"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeNumber}.png`}
        alt={name}
      />
      <p className="Pokecard-meta">Type: {type}</p>
      <p className="Pokecard-meta">EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;

// <img src={logo} className="App-logo" alt="logo" />
