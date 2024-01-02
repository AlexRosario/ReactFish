import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { GameBoardProps } from "../../types";
import * as React from "react";

const initialFishes = [
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

export class ClassGameBoard extends Component<GameBoardProps> {
	state = {
		fishGuess: "",
	};
	setFishGuess = (guess: string) => {
		this.setState({ fishGuess: guess });
	};

	testAnswer = () => {
		if (
			this.state.fishGuess.toLowerCase() ===
			this.props.answersLeft[this.props.total].toLowerCase()
		) {
			this.props.setCorrectCount(this.props.correctCount + 1);
		} else {
			this.props.setIncorrectCount(this.props.incorrectCount + 1);
		}

		this.setFishGuess("");
		this.props.setTotal(this.props.total);
	};
	render() {
		return (
			<>
				<div id="game-board">
					<div id="fish-container">
						<img
							src={initialFishes[this.props.total].url}
							alt={initialFishes[this.props.total].name}
						/>
					</div>
					<form
						id="fish-guess-form"
						onSubmit={(e) => {
							e.preventDefault();
							this.testAnswer();
						}}>
						<label htmlFor="fish-guess">What kind of fish is this?</label>
						<input
							type="text"
							name="fish-guess"
							onChange={(e) => this.setFishGuess(e.target.value)}
							value={this.state.fishGuess}
						/>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</>
		);
	}
}
