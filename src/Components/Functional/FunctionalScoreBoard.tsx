import * as React from "react";
import "./styles/score-board.css";
import { ScoreBoardProps } from "../../types";

export const FunctionalScoreBoard: React.FC<ScoreBoardProps> = ({
	incorrectCount,
	correctCount,
	answersLeft,
}) => {
	const total = correctCount + incorrectCount;
	return (
		<div id="score-board">
			<div>Incorrect 🔻: {incorrectCount}</div>
			<div id="choices-left">
				{answersLeft.slice(total).map((answer: string) => (
					<div key={answer} className="choice">
						{answer}
					</div>
				))}
			</div>
			<div>Correct ✅: {correctCount}</div>
		</div>
	);
};
