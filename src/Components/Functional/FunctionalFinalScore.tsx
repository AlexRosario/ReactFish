import * as React from "react";
import "./styles/final-score.css";
import { FinalScoreProps } from "../../types";

export const FunctionalFinalScore: React.FC<FinalScoreProps> = ({
	correctCount,
	incorrectCount,
}) => {
	const total = correctCount + incorrectCount;
	return (
		<div id="final-score">
			<h1>Your Final Score Was</h1>
			<div id="score">
				<p>{correctCount}</p>
				<hr />
				<p>{total}</p>
			</div>
		</div>
	);
};
