import * as React from "react";
import { Component } from "react";
import { Images } from "../../assets/Images";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export const initialFishes = [
	{
		name: "trout",
		url: Images.trout,
	},
	{
		name: "salmon",
		url: Images.salmon,
	},
	{
		name: "tuna",
		url: Images.tuna,
	},
	{
		name: "shark",
		url: Images.shark,
	},
];

export class ClassApp extends Component {
	state = {
		incorrectCount: 0,
		correctCount: 0,
	};

	answersLeft = initialFishes.map((fish) => fish.name);

	testAnswer = (answer: string) => {
		const currentFish =
			initialFishes[this.state.correctCount + this.state.incorrectCount];
		const isCorrect = currentFish.name.toLowerCase() === answer.toLowerCase();

		this.setState(() => ({
			correctCount: this.state.correctCount + (isCorrect ? 1 : 0),
			incorrectCount: this.state.incorrectCount + (isCorrect ? 0 : 1),
		}));
	};

	render() {
		const { correctCount, incorrectCount } = this.state;
		const totalCount = correctCount + incorrectCount;
		const finalScorePage = totalCount >= initialFishes.length;

		return (
			<>
				{!finalScorePage && (
					<ClassScoreBoard
						incorrectCount={incorrectCount}
						correctCount={correctCount}
						answersLeft={this.answersLeft}
					/>
				)}
				{!finalScorePage && (
					<ClassGameBoard total={totalCount} handleAnswer={this.testAnswer} />
				)}
				{finalScorePage && (
					<ClassFinalScore
						correctCount={correctCount}
						totalCount={initialFishes.length}
					/>
				)}
			</>
		);
	}
}
