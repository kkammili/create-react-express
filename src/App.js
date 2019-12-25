import React from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';


class App extends React.Component{
  componentDidMount(){
      const socket = io.connect('http://localhost:5000')
      socket.on('connect', function(data) {
        socket.emit('join', 'Hello World from client')
      });

      socket.on('messages', function(data) {
        alert(data);
      });
  }
  render(){
      return (
          <div className="App">
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
      );
  }
}

export default App;
