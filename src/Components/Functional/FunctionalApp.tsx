import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import * as React from "react";
import { useState } from "react";

export function FunctionalApp() {
	const [incorrectCount, setIncorrectCount] = useState(0);
	const [correctCount, setCorrectCount] = useState(0);
	const [answersLeft] = useState(["trout", "salmon", "tuna", "shark"]);

	const totalCount = correctCount + incorrectCount;
	const finalScorePage = totalCount < answersLeft.length ? false : true;
	return (
		<>
			{!finalScorePage && (
				<FunctionalScoreBoard
					incorrectCount={incorrectCount}
					correctCount={correctCount}
					answersLeft={answersLeft}
				/>
			)}
			{!finalScorePage && (
				<FunctionalGameBoard
					incorrectCount={incorrectCount}
					correctCount={correctCount}
					answersLeft={answersLeft}
					setIncorrectCount={setIncorrectCount}
					setCorrectCount={setCorrectCount}
				/>
			)}
			{finalScorePage && (
				<FunctionalFinalScore
					correctCount={correctCount}
					incorrectCount={incorrectCount}
				/>
			)}
		</>
	);
}

//I think state has to be set up to accept a boolean for whether the answer is correct or incorrect
//or the correct and incorrect values from score component need to be brought to parent and set as state
