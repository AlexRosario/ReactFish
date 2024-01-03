import { Component } from "react";
import "./styles/score-board.css";
import { ScoreBoardProps } from "../../types";
import * as React from "react";

export class ClassScoreBoard extends Component<ScoreBoardProps> {
	total = this.props.correctCount + this.props.incorrectCount;
	render() {
		return (
			<div id="score-board">
				<div>Incorrect 🔻: {this.props.incorrectCount}</div>
				<div id="choices-left">
					{this.props.answersLeft
						.slice(this.total)
						.map((currentFish: string) => (
							<div key={currentFish} className="choice">
								{currentFish}
							</div>
						))}
				</div>
				<div>Correct ✅: {this.props.correctCount}</div>
			</div>
		);
	}
}
