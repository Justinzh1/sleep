import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import questions from '../questions.js';
import './Quiz.css';

class Quiz extends Component {

	get_questions() {
		var q = [];
		console.log(questions);
		questions.questions.forEach((qu, i) => {
    	console.log(qu);
			q.push(
				<QuizQuestion
					question={qu.question}
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
			</div>
		);
	}
}

class QuizQuestion extends Component {
	render () {
		return (
			<div className="quiz-question-container"> 
				<h2 className="quiz-question">
					{ this.props.question }
				</h2>
				<table> 
				</table>
			</div>
		);
	}
}

export default Quiz;
