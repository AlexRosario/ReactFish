import * as React from "react";
import "./styles/score-board.css";

type FunctionalScoreBoardProps = {
	incorrectCount: number;
	correctCount: number;
	answersLeft: string[];
};
export const FunctionalScoreBoard: React.FC<FunctionalScoreBoardProps> = ({
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
