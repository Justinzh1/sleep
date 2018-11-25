import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RadialChart } from 'react-vis';
import { VictoryPie, VictoryLabel, VictoryChart, VictoryTooltip, VictoryScatter } from 'victory';
import questions from '../questions.js';
import counts from '../count.js';
import './Quiz.css';

class Quiz extends Component {

	constructor(props) {
		super(props);
		let answered = new Set();
		this.state = {
			score: 0,
			answered: answered
		};
	}

	update_score(prev, next, qid) {
		let answered = this.state.answered;
		if (!answered.has(qid)) {
			answered.add(qid);
			this.setState({
				score: this.state.score - parseInt(prev) + parseInt(next),
				answered: answered
			});
		} else {
			this.setState({
				score: this.state.score - parseInt(prev) + parseInt(next),
			});
		}
	}

	is_complete() {
		console.log(this.state.answered.size === 19);
		return this.state.answered.size === 19;
	}

	get_questions() {
		var q = [];
		if (this.state.answered.size === 19) {
			window.scrollTo(0,0);
		}
		questions.questions.forEach((qu, i) => {
			q.push(
				<QuizQuestion
					id={qu.id}
					question={qu.question}
					options={qu.options}
					update_score={(x,y,z) => this.update_score(x,y,z)}
					ready={this.is_complete()}
					key={qu.id}
				/>
			);
		});
		return q;
	}
	
	get_score() {
		if (this.state.answered.size === 19) {
			return (
				<div>
				<div className="quiz-results">
					<h2 className="quiz-question">Your Morningness-Eveningness Score is {this.state.score} </h2>
					<p> Higher scores mean that you are more of a morning person, whereas lower scores mean that you are more of an evening person. The score can range from 23 to 76.</p>
				</div>
				<br />
				<VictoryPie
						data={[{x:37, y:6}, {x:42, y:6}, {x:34, y:6}, {x:51, y:4}, {x:41, y:4}, {x:49, y:4}, {x:36, y:4}, {x:55, y:3}, {x:43, y:3}, {x:40, y:3}, {x:47, y:3}, {x:45, y:2}, {x:27, y:2}, {x:52, y:2}, {x:56, y:2}, {x:32, y:2}, {x:46, y:2}, {x:48, y:2}, {x:26, y:2}, {x:39, y:2}, {x:30, y:2}, {x:54, y:2}, {x:53, y:1}, {x:50, y:1}, {x:63, y:1}, {x:57, y:1}, {x:38, y:1}, {x:59, y:1}, {x:28, y:1}, {x:60, y:1}, {x:73, y:1}, {x:66, y:1}, {x:68, y:1}, {x:35, y:1}, {x:33, y:1}, {x:25, y:1}]}
						radius={200}
						width={500}
						height={500}
						style={{ labels: { fontSize: 12, fill: "white" }}}
						colorScale={"blue"}
					/>
				</div>
			);
		}
	}

	render () {
		let q = this.get_questions();
		return (
			<div className="quiz-container">
				<h2 className="quiz-question">Are you a morning person or an evening person?</h2>
				<p>The morningness-eveningness test is a way to measure when you are the most productive. This test features a systematic way to evaluate your score. After filling out the following sections you can see the results along with how you compare with others. </p>
				{this.get_score()}
				{q}
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
		this.props.update_score(old, i, this.props.id);
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

	get_data() {
		if (this.props.id)
			return counts[this.props.id.toString()];
	}

	get_pie() {
		if (this.props.ready) {
			return (
				<div className="compare">
					<h2> Survey Results </h2>
					<VictoryPie 
						data={this.get_data()}
						style={{ labels: { fontSize: 16, fill: "#1E122C" }}}
						colorScale={"cool"}
						padAngle={4}
						padding={30}
						radius={150}
						width={600}
						height={500}
						labelComponent={
							<VictoryTooltip
							/>
						}
						innerRadius={60}
					/>
				</div>
			);
		}
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
				{ this.get_pie() }
			</div>
		);
	}
}

export default Quiz;
