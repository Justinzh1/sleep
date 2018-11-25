import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 	LineSegment,
					VictoryAxis,
					VictoryPie,
					VictoryChart,
					VictoryTooltip,
					VictoryTheme,
					VictoryPolarAxis,
					VictoryBar
				} from 'victory';
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
					<VictoryChart
						theme={VictoryTheme.material}
						domainPadding={5}
						width={600}
						domain={{ x: [22, 75], y: [0, 10] }}	
						>
						<VictoryAxis 
							style={{
								axis: {stroke: "white"},
								tickLabels: {fontSize: 13, fill: "white"}
							}}	
							/>
						<VictoryBar
							labelComponent={<VictoryTooltip/>}
							data={[{x:37, y:6, label:"37 for 6 people"}, {x:42, y:6, label:"42 for 6 people"}, {x:34, y:6, label:"34 for 6 people"}, {x:51, y:4, label:"51 for 4 people"}, {x:41, y:4, label:"41 for 4 people"}, {x:49, y:4, label:"49 for 4 people"}, {x:36, y:4, label:"36 for 4 people"}, {x:55, y:3, label:"55 for 3 people"}, {x:43, y:3, label:"43 for 3 people"}, {x:40, y:3, label:"40 for 3 people"}, {x:47, y:3, label:"47 for 3 people"}, {x:45, y:2, label:"45 for 2 people"}, {x:27, y:2, label:"27 for 2 people"}, {x:52, y:2, label:"52 for 2 people"}, {x:56, y:2, label:"56 for 2 people"}, {x:32, y:2, label:"32 for 2 people"}, {x:46, y:2, label:"46 for 2 people"}, {x:48, y:2, label:"48 for 2 people"}, {x:26, y:2, label:"26 for 2 people"}, {x:39, y:2, label:"39 for 2 people"}, {x:30, y:2, label:"30 for 2 people"}, {x:54, y:2, label:"54 for 2 people"}, {x:53, y:1, label:"53 for 1 people"}, {x:50, y:1, label:"50 for 1 people"}, {x:63, y:1, label:"63 for 1 people"}, {x:57, y:1, label:"57 for 1 people"}, {x:38, y:1, label:"38 for 1 people"}, {x:59, y:1, label:"59 for 1 people"}, {x:28, y:1, label:"28 for 1 people"}, {x:60, y:1, label:"60 for 1 people"}, {x:73, y:1, label:"73 for 1 people"}, {x:66, y:1, label:"66 for 1 people"}, {x:68, y:1, label:"68 for 1 people"}, {x:35, y:1, label:"35 for 1 people"}, {x:33, y:1, label:"33 for 1 people"}, {x:25, y:1, label:"25 for 1 people"}] }
							style={{
								data: { fill: "#FFF", "font-size":"14px", strokeWidth: 0 },
								axisLabel: {fontSize: 13, fill: "white"}
							}}
							/>
					</VictoryChart>
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
