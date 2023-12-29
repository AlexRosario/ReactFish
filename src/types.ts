export type FunctionalGameBoardProps = {
	incorrectCount: number;
	correctCount: number;
	answersLeft: string[];
	setIncorrectCount: (incorrectCount: number) => void;
	setCorrectCount: (correctCount: number) => void;
};
// If you have any types that are SHARED BY MANY COMPONENTS,put them here
