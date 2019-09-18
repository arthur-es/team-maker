import React, { useState } from "react";
import Form from "./Form";

const PlayerList = () => {
	const [players, setPlayers] = useState([
		{ id: 1, name: "Arthur", skill: 3 },
		{ id: 2, name: "Lucas", skill: 4 }
	]);

	const addPlayer = (name) => {
		setPlayers([...players, { id: 3, name, skill: 5 }]);
	}

	return (
		<div>
			<h1>List of Players</h1>
			<Form addPlayer={addPlayer}/>
			<ul>
				{players.map(player => (
					<li key={player.name}>{player.name}</li>
				))}
			</ul>
		</div>
	);
};

export default PlayerList;