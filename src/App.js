import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

constructor(props) {
  super(props);

  this.state = { x: 0, y: 0 };
}

_onMouseMove(e) {
  this.setState({ x: e.screenX, y: e.screenY });
}

// render() {
//   const { x, y } = this.state;
//   return <div onMouseMove={this._onMouseMove.bind(this)}>
//     <h1>Mouse coordinates: { x } { y }</h1>
//   </div>;
// }

render() {
  const { x, y } = this.state;
  return <div onMouseMove={this._onMouseMove.bind(this)}  className="App">
      <h1>Mouse coordinates: { x } { y }</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
}
}


export default App;
