/* eslint-disable no-mixed-spaces-and-tabs */
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
