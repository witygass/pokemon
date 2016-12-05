var React = require('react');
var ReactDOM = require('react-dom');
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: {},
      selectedPokemon: ''
    }
  }
  // this.handlers = {
  //   onVLEClick: (event) => {
  //     this.setState({selectedPokemon: 1})
  //   }
  // }

  render() {
    return (
      <div>
        <Counter />
        <div class="nav"></div>
        <div class="filter">
          <div class="type"></div>
        </div>
        <div class="pokemonList"></div>
      </div>
    )
  }
}

export default App;
