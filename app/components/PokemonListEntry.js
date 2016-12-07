import React from 'react';

var PokemonListEntry = (props) => (
  // console.log(props.singlePokemon.sprites[0].front_default),
  <div className="list-entry">
    <div>
      <img className="list-image" src={props.singlePokemon.sprites[0].front_default} />
      <div className="list-name">{props.singlePokemon.name}</div>
    </div>
  </div>
)

export default PokemonListEntry
