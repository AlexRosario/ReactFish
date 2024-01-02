import * as React from "react";
import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
	state = {
		incorrectCount: 0,
		correctCount: 0,
		answersLeft: ["trout", "salmon", "tuna", "shark"],
		total: 0,
	};

	setIncorrectCount = (newCount: number) => {
		this.setState({ incorrectCount: newCount });
	};

	setCorrectCount = (newCount: number) => {
		this.setState({ correctCount: newCount });
	};
	setTotal = (total: number) => {
		this.setState({ total: total + 1 });
	};

	render() {
		const { incorrectCount, correctCount, answersLeft } = this.state;
		const totalCount = correctCount + incorrectCount;
		const finalScorePage = totalCount >= answersLeft.length;

		return (
			<>
				{!finalScorePage && (
					<ClassScoreBoard
						incorrectCount={incorrectCount}
						correctCount={correctCount}
						answersLeft={answersLeft}
						total={this.state.total}
					/>
				)}
				{!finalScorePage && (
					<ClassGameBoard
						incorrectCount={incorrectCount}
						correctCount={correctCount}
						answersLeft={answersLeft}
						setIncorrectCount={this.setIncorrectCount}
						setCorrectCount={this.setCorrectCount}
						total={this.state.total}
						setTotal={this.setTotal}
					/>
				)}
				{finalScorePage && (
					<ClassFinalScore
						correctCount={correctCount}
						incorrectCount={incorrectCount}
						total={this.state.total}
					/>
				)}
			</>
		);
	}
}
