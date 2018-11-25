import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home/index';
import Navbar from './components/Navbar/index';
import Quiz from './components/quiz/index';
import Faq from './components/faq/index';
import './App.css';
import '../node_modules/react-vis/dist/style.css';

class App extends Component {
  render() {
		console.log("public url " + process.env.PUBLIC_URL);
    return (
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<div>
					<Navbar />	
					<Switch>
						<Route exact path={"/"} component={Home} />	
						<Route exact path={"/quiz"} component={Quiz} />	
						<Route exact path={"/faq"} component={Faq} />	
					</Switch>
				</div>
			</BrowserRouter>
    );
  }
}

export default App;
