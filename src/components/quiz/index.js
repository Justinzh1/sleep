import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import questions from '../questions.js';
import './Quiz.css';

class Quiz extends Component {

	constructor(props) {
		super(props);
		this.state = {
			score: 0
		};
	}

	update_score(prev, next) {
		this.setState({
			score: this.state.score - parseInt(prev) + parseInt(next)
		});
	}

	get_questions() {
		var q = [];
		questions.questions.forEach((qu, i) => {
			q.push(
				<QuizQuestion
					question={qu.question}
					options={qu.options}
					update_score={(x,y) => this.update_score(x,y)}
					key={qu.id}
				/>
			);
		});
		return q;
	}

	render () {
		let q = this.get_questions();
		return (
			<div className="quiz-container">
				<h2 className="quiz-question">Are you a morning person or an evening person?</h2>
				<p>The morningness-eveningness test is a way to measure when you are the most productive. This test features a systematic way to evaluate your score. After filling out the following sections you can see the results along with how you compare with others. </p>
				{q}
				<br />
				<div className="quiz-results">
					<h2 className="quiz-question">Your Morningness-Eveningness Score is {this.state.score} </h2>
					<p> Higher scores mean that you are more of a morning person, whereas lower scores mean that you are more of an evening person. The score can range from 23 to 76.</p>
				</div>
			</div>
		);
	}
}

class QuizQuestion extends Component {

	constructor(props) {
		super(props);
		this.state = {
			answered: false,
			selected: null,
			score: 0
		}
	}

	handle_click(i) {
		let old = (!this.state.selected) ? 0 : this.state.selected;
		this.props.update_score(old, i);
		this.setState({
			answered: true,
			selected: i
		});
	}
	
	get_rows() {
		var rows = [];
		if (!this.props || !this.props.options) {
			return;
		}
		Object.entries(this.props.options).forEach((k, v) => {
			let selected = "";
			if (this.state.selected === k[0]) {
				selected = "selected"	
			}
			rows.push(
				<tr key={k[1]} className={selected} onClick={() => this.handle_click(k[0])}>
					<td>{k[1]}</td>
				</tr>
			)
		});
		return rows;
	}

	get_indicator() {
		return (!this.state.answered) ?
			(<i className="far fa-circle indicator"></i>) :
			(<i className="fas fa-check-circle indicator"></i>);
	}

	render () {
		const rows = this.get_rows();
		return (
			<div className="quiz-question-container"> 
				{ this.get_indicator() }
				<h2 className="quiz-question">
					{ this.props.question }
				</h2>
				<table> 
					<tbody>
						{ rows }	
					</tbody>
				</table>
			</div>
		);
	}
}

export default Quiz;
