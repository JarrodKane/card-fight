import React from "react";
import "./pokedex.css";
import Pokecard from "./Pokecard";

function Pokedex(props) {

  const pokemons = props.pokemons.map((pokemon) => (
    <Pokecard key={pokemon.id} pokemon={pokemon} />
  ));

  return <div className="Pokedex">{pokemons}</div>;
}

export default Pokedex;
