import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

const initialFishes = [
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

export class ClassGameBoard extends Component<{
	incorrectCount;
	correctCount;
	answersLeft;
	setIncorrectCount;
	setCorrectCount;
}> {
	fishGuess = {
		state: "",
	};

	total = this.props.correctCount + this.props.incorrectCount;
	testAnswer = () => {
		if (
			this.fishGuess.toLowerCase() ===
			this.props.answersLeft[this.total].toLowerCase()
		) {
			setCorrectCount(correctCount + 1);
		} else {
			setIncorrectCount(incorrectCount + 1);
		}

		setFishGuess("");
	};
	render() {
		const nextFishToName = initialFishes[0];
		function setFishGuess(value: string): void {
			throw new Error("Function not implemented.");
		}

		return (
			<div id="game-board">
				<div id="fish-container">
					<img src={initialFishes[total].url} alt={initialFishes[total].name} />
				</div>
				<form
					id="fish-guess-form"
					onSubmit={(e) => {
						e.preventDefault();
						testAnswer();
					}}>
					<label htmlFor="fish-guess">What kind of fish is this?</label>
					<input
						type="text"
						name="fish-guess"
						onChange={(e) => setFishGuess(e.target.value)}
						value={fishGuess}
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import * as React from "react";
import { useState } from "react";
import { FunctionalGameBoardProps } from "../../types";

const initialFishes = [
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

export const FunctionalGameBoard: React.FC<FunctionalGameBoardProps> = ({
	incorrectCount,
	correctCount,
	answersLeft,
	setIncorrectCount,
	setCorrectCount,
}) => {
	const [fishGuess, setFishGuess] = useState("");
	const total = correctCount + incorrectCount;
	const testAnswer = () => {
		if (fishGuess.toLowerCase() === answersLeft[total].toLowerCase()) {
			setCorrectCount(correctCount + 1);
		} else {
			setIncorrectCount(incorrectCount + 1);
		}

		setFishGuess("");
	};

	return (
		<div id="game-board">
			<div id="fish-container">
				<img src={initialFishes[total].url} alt={initialFishes[total].name} />
			</div>
			<form
				id="fish-guess-form"
				onSubmit={(e) => {
					e.preventDefault();
					testAnswer();
				}}>
				<label htmlFor="fish-guess">What kind of fish is this?</label>
				<input
					type="text"
					name="fish-guess"
					onChange={(e) => setFishGuess(e.target.value)}
					value={fishGuess}
				/>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};
function setCorrectCount(arg0: any) {
	throw new Error("Function not implemented.");
}

function setIncorrectCount(arg0: any) {
	throw new Error("Function not implemented.");
}

function setFishGuess(arg0: string) {
	throw new Error("Function not implemented.");
}
