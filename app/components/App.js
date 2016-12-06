import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import PokemonList from './PokemonList';
import searchPokemon from '../lib/searchPokemon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: this.props.searchPokemon,
      //parameter to filter by => object?
      filterBy: '',
      //pokemon to display at top => object
      selectedPokemon: ''
    };
    // this.handlers = {
    //   onVLEClick: (event) => {
    //     this.setState({selectedPokemon: 1})
    //   }
    // }
  }


  render() {
    searchPokemon();
    return (
      <div>
        <Counter />
        <div className="navIncludesTypeAndSearchFilters"></div>
        <div className="viewContainsAllDetails">
        </div>
        <PokemonList pokemon={this.state.pokemonList} />
      </div>
    )
  }
}

export default App
