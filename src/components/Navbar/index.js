import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

	render () {
		return (
			<div className="navbar-container">
				<div className="navbar-logo-container">
					<p className="inline-block navbar-logo">Sleep</p>
					<p className="inline-block navbar-logo-text">& why you need it.</p>
				</div>
				<div className="navbar-menu">
					<Link to="/photos" onClick={() => this.props.select("photos")} >gallery</Link>
					<Link to="/quiz" onClick={() => this.props.select("quiz")}>quiz</Link>
					<Link to="/faq" onClick={() => this.props.select("faq")}>faq</Link>
				</div>
			</div>
		);
	}
}

export default Navbar;
