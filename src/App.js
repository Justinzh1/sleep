import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/index';
import Navbar from './components/Navbar/index';
import './App.css';

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<Navbar />	
					<Route exact path="/" component={Home} />	
				</div>
			</Router>
    );
  }
}

export default App;
