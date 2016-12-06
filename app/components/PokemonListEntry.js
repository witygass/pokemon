import React from 'react';

var PokemonListEntry = (props) => (
  console.log(props),
  <div className="list-entry">
    <div>
      <img className="list-image" src={props.singlePokemon.sprites.front_default} />
    </div>
  </div>
)

export default PokemonListEntry
