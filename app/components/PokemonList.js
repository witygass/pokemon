import React from 'react';
import PokemonListEntry from './PokemonListEntry';

var PokemonList = (props) => (
  console.log(props),
  <div className="pokemon-list">
  {props.pokemon.map(obj => <PokemonListEntry key={obj.id} singlePokemon={obj} />)}
  </div>
)

// {[{id:1},{id:2},{id:3}].map(el => <div key={el.id}>{el.id}</div>)}

export default PokemonList
