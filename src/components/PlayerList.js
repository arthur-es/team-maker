import React, { useState } from "react";

import Form from "./Form";
import './css/Form.css'

const PlayerList = ({ setTeamOne, setTeamTwo, benchPlayers,  setBenchPlayers }) => {
	
	const [players, setPlayers] = useState([]);

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

	const addPlayer = (name) => {
		setPlayers([...players, { name, skill: 5 }]);
		const array = [...players];
		localStorage.setItem('TP_PLAYERS', JSON.stringify(array));	
	}
	
	const deletePlayer = (name) => {
		let playersUpdated = players.filter( player => player.name !== name );
		setPlayers(playersUpdated);
	}
	
	return (
		<div className='PlayerList'>
			<Form addPlayer={addPlayer}/>
			<div className="app-list-players">
				<h1>List of Players</h1>
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
			<div className="app-btn-generate-teams">
				<button id="select-teams" 
					onClick={randomizeTeams} 
					disabled={players.length <= 1}
				> Create Teams
				</button>
			</div>
		</div>
	);
};

export default PlayerList;