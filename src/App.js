import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/index';
import Navbar from './components/Navbar/index';
import Quiz from './components/quiz/index';
import './App.css';

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<Navbar />	
					<Route exact path="/" component={Home} />	
					<Route exact path="/quiz" component={Quiz} />	
				</div>
			</Router>
    );
  }
}

export default App;
