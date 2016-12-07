import React from 'react';
import PokemonListEntry from './PokemonListEntry';

var PokemonList = (props) => (
  // console.log(props),
  <div className="pokemon-list">
  {props.pokemon.map(obj => <PokemonListEntry key={obj.id} singlePokemon={obj}/>)}
  </div>
)

export default PokemonList
