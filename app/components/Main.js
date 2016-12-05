var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        Wrapper
        <h1>
        Header Space
        </h1>
        <div>
          Hello World!
        </div>
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));
