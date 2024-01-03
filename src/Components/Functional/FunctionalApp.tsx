import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import * as React from "react";
import { useState } from "react";

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

export function FunctionalApp() {
	const [incorrectCount, setIncorrectCount] = useState(0);
	const [correctCount, setCorrectCount] = useState(0);
	const answersLeft = initialFishes.map((fish) => fish.name);
	const totalCount = correctCount + incorrectCount;
	const finalScorePage = totalCount >= answersLeft.length;

	const testAnswer = (answer: string) => {
		if (initialFishes[totalCount].name.toLowerCase() === answer.toLowerCase()) {
			setCorrectCount(correctCount + 1);
		} else {
			setIncorrectCount(incorrectCount + 1);
		}
	};
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
				<FunctionalGameBoard total={totalCount} handleAnswer={testAnswer} />
			)}
			{finalScorePage && (
				<FunctionalFinalScore
					correctCount={correctCount}
					totalCount={initialFishes.length}
				/>
			)}
		</>
	);
}

//I think state has to be set up to accept a boolean for whether the answer is correct or incorrect
//or the correct and incorrect values from score component need to be brought to parent and set as state
