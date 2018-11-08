import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

	render () {
		return (
			<div className="navbar-container">
				<div className="navbar-logo-container">
					<p className="inline-block navbar-logo">Sleep</p>
					<p className="inline-block navbar-logo-text">// why you need it.</p>
				</div>
				<div className="navbar-menu">
					<Link to="/info">info</Link>
					<Link to="/info">compare</Link>
					<Link to="/info">faq</Link>
				</div>
			</div>
		);
	}
}

export default Navbar;
