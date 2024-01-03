export type GameBoardProps = {
	handleAnswer: (answer: string) => void;
	total: number;
};

export type ScoreBoardProps = {
	incorrectCount: number;
	correctCount: number;
	answersLeft: string[];
};

export type FinalScoreProps = {
	correctCount: number;
	totalCount: number;
};
// If you have any types that are SHARED BY MANY COMPONENTS,put them here
