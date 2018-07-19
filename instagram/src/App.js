import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from
import PostContainer
import SearchBar


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PostContainer postData={} />
      </div>
    );
  }
}

export default App;
**************************************************************************************
const App = () => (
  <div className="App">
    <SearchBar />
    <dummyData.map((post, i) => <PostContainer key={i} postData={post}) />
  </div>
)

export default App;