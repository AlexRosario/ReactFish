import * as React from "react";
import "./styles/final-score.css";
type finalScore = {
	correctCount: number;
	incorrectCount: number;
};
export const FunctionalFinalScore: React.FC<finalScore> = ({
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
