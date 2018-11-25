import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/index';
import Navbar from './components/Navbar/index';
import Quiz from './components/quiz/index';
import Faq from './components/faq/index';
import './App.css';
import '../node_modules/react-vis/dist/style.css';

class App extends Component {
  render() {
    return (
			<Router basename={process.env.PUBLIC_URL}>
				<div>
					<Navbar />	
					<Route exact path={"/"} component={Home} />	
					<Route exact path={"/quiz"} component={Quiz} />	
					<Route exact path={"/faq"} component={Faq} />	
				</div>
			</Router>
    );
  }
}

export default App;
