import "./styles/game-board.css";
import * as React from "react";
import { useState } from "react";
import { GameBoardProps } from "../../types";
import { initialFishes } from "./FunctionalApp";

export const FunctionalGameBoard: React.FC<GameBoardProps> = ({
	handleAnswer,
	total,
}) => {
	const [fishGuess, setFishGuess] = useState("");
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		handleAnswer(fishGuess);
		setFishGuess("");
	};

	return (
		<div id="game-board">
			<div id="fish-container">
				<img src={initialFishes[total].url} alt={initialFishes[total].name} />
			</div>
			<form id="fish-guess-form" onSubmit={handleSubmit}>
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
