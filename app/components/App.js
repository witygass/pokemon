import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import PokemonList from './PokemonList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: this.props.searchPokemon,
      filterBy: '',
      selectedPokemon: ''
    };
    // this.handlers = {
    //   onVLEClick: (event) => {
    //     this.setState({selectedPokemon: 1})
    //   }
    // }
  }

  componentWillMount() {
    var context = this;
    console.log('App component: fetching pokemon from mongo');
    fetch('/pokemon', {
      method:'get'
    })
    .then(function(response){
      var pokemons = response.json();
      // This returns a 'pending' promise
      // wait for it to fully return before trying to render
      // console.log(pokemons);
      return pokemons;
    })
    .then(function(resultArray) {
      // console.log(resultArray);
      context.setState({pokemonList: resultArray})
    })
    .catch(function(err){
      console.log(err)
    });
  }

  render() {
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
