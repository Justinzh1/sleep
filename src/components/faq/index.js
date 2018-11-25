import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import faq from '../faq.js';
import './faq.css';

class Faq extends Component {

	get_faq() {
		var faqs = [];
		faq.faq.forEach((f, i) => {
			faqs.push(
				<FaqCard
					question={f.question}
					answer={f.answer}
					key={f.question}
				/>
			);
		});
		return faqs;
	}

	render () {
		return (
			<div className="container">
				<div className="header-container">
						<h2> FAQ </h2>
						<p> Listed below are some of the most frequently asked questions collected from our sleep survey. Feel free to click and explore more about the most common misconceptions regarding sleep. </p>
				</div>
				<div className="faqs-container">
					{ this.get_faq() } 
				</div>
			</div>	
		);
	}
}

class FaqCard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			question: true
		};
	}

	handle_click() {
		this.setState({
			question: !this.state.question
		});
	}

	get_text() {
		if (this.state.question) {
			return (
				<p className="faq-text">
					{ this.props.question }
				</p>
			);
		} else {
			return (
				<p className="faq-text">
					<i style={{"opacity": 0.7}} >{ this.props.answer }</i>

				</p>
			);
		}
	}

	render() {
		return (
			<div className="faq-card" onClick={() => this.handle_click()}>
				{ this.get_text() }
				<p className="faq-fab">
					flip
				</p>
			</div>
		);
	}
}

export default Faq;
