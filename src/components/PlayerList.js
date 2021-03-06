import React, { useState } from "react";

import Form from "./Form";
import './../styles/PlayerList.css'

const PlayerList = ({ class_name, setTeamOne, setTeamTwo, setBenchPlayers }) => {
	
	const [players, setPlayers] = useState(JSON.parse(localStorage.getItem('TP_PLAYERS')) || []);
	localStorage.setItem('TP_PLAYERS', JSON.stringify(players));

	const addBenchPlayers = (index) => {	
		setBenchPlayers([players[index]]);
	}

	const randomizeTeams = () => {
		setBenchPlayers([]);
		let teamOne = [], teamTwo = [];
		const numPlayers = players.length;
		const maxPlayersByTeam = Math.floor(numPlayers / 2);
		let waitingPlayerIndex = -1;
		
		if (numPlayers%2 !== 0){
			waitingPlayerIndex = parseInt(Math.random()*numPlayers);
			addBenchPlayers(waitingPlayerIndex);
		}
		
		for(let i = 0; i < numPlayers; i++) {
			if (i === waitingPlayerIndex) continue;
			const assignedTeam = Math.round(Math.random());
			if (assignedTeam === 0 && teamOne.length < maxPlayersByTeam) {
				teamOne.push(players[i]);	
			} else if(teamTwo.length < maxPlayersByTeam) { 
				teamTwo.push(players[i]);
			} else {
				teamOne.push(players[i]);
			}
		}

		setTeamOne(teamOne);
		setTeamTwo(teamTwo);
	}

	const addPlayer = (name, skill = '1') => {
		setPlayers([...players, { name, skill }]);
	}
	
	const deletePlayer = (name) => {
		let playersUpdated = players.filter( player => player.name !== name );
		setPlayers(playersUpdated);
	}

	const deleteAll = () => {
		setPlayers([]);
	}

	return (
		<div className={class_name}>
			<Form 
				class_name="Form"
				addPlayer={addPlayer}
			/>
			<div className="app-list-players">
				<h1 className="player-list-title">List of Players</h1>
				<ul>
					{players.map(player => (
						<li key={player.name}>
							{player.name} 
							<span>
								<button
									onClick={() => {
										deletePlayer(player.name);
									}}
								>X</button>
							</span> 
						</li>
					))}
				</ul>
			</div>
			<button className="delete-all" 
				onClick={deleteAll} 
			> Delete All
			</button>
			<button className="select-teams" 
				onClick={randomizeTeams} 
				disabled={players.length <= 1}
			> Create Teams
			</button>
		</div>
	);
};

export default PlayerList;