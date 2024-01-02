export type GameBoardProps = {
	incorrectCount: number;
	correctCount: number;
	answersLeft: string[];
	setIncorrectCount: (incorrectCount: number) => void;
	setCorrectCount: (correctCount: number) => void;
	total: number;
	setTotal: (count: number) => void;
};

export type ScoreBoardProps = {
	incorrectCount: number;
	correctCount: number;
	answersLeft: string[];
	total: number;
};

export type FinalScoreProps = {
	correctCount: number;
	incorrectCount: number;
	total: number;
};
// If you have any types that are SHARED BY MANY COMPONENTS,put them here
