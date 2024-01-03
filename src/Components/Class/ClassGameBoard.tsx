import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { GameBoardProps } from "../../types";
import * as React from "react";
import { initialFishes } from "./ClassApp";

export class ClassGameBoard extends Component<GameBoardProps> {
	state = {
		fishGuess: "",
	};
	setFishGuess = (guess: string) => {
		this.setState({ fishGuess: guess });
	};
	handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		this.props.handleAnswer(this.state.fishGuess);
		this.setFishGuess("");
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
					<form id="fish-guess-form" onSubmit={this.handleSubmit}>
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
