import React from 'react'
import Pokedex from './Pokedex'




function getArry(PokeDefault) {
    let test = [];
    console.log(PokeDefault)

    let i = 0;
    while (i < PokeDefault.length / 2) {
        const newNumber = Math.floor(Math.random() * PokeDefault.length)

        if (test.length === undefined) {
            test.push(PokeDefault[newNumber])
            i++;
        } else if (searchPokemon(PokeDefault[newNumber].id, test)) {
            console.log("No pokemon found");
            test.push(PokeDefault[newNumber])
            i++;
        }
    }
    return test;
}

function searchPokemon(pokeID, pokeArray) {
    for (let i = 0; i < pokeArray.length; i++) {
        if (pokeArray[i].id === pokeID) {
            return false

        }
    }
    return true;
}

function countScore(deck) {
    let total;
    for (let i = 0; i < deck.length; i++) {
        console.log(deck[i].base_experience)
        total = + deck[i].base_experience;
    }
    return total;
}



function Pokegame(props) {
    Pokedex.defaultProps = [
        { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
        { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
        { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
        { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
        { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
        { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
        { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
        { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ];


    const tim = getArry(Pokedex.defaultProps);
    const eric = getArry(Pokedex.defaultProps);



    const winner = () => {
        const timScore = countScore(tim);
        const ericScore = countScore(eric);
        if (timScore > ericScore) {
            return <div> Tim wins</div>

        } else {
            return <div>Eric wins</div>

        }

    }



    return (
        <div>
            <Pokedex pokemons={tim} />
            {winner()}
            <Pokedex pokemons={eric} />
        </div>
    )

}

export default Pokegame;