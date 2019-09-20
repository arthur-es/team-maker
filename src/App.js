import React, {useState} from "react";

import './css/App.css'
import Header from "./components/Header";
import PlayerList from "./components/PlayerList";
import Teams from "./components/Teams";

const App = () => {
	const [teamOne, setTeamOne] = useState([]);
	const [teamTwo, setTeamTwo] = useState([]);
	const [benchPlayers, setBenchPlayers] = useState([]);

	return (
		<div className="App">
			<div className="app-header">
				<Header
					title="Team Picker"
					subTitle="Make a fair game"
				></Header>
			</div>
			<div className="playerList">
				<PlayerList 
					setBenchPlayers={setBenchPlayers}
					benchPlayers={benchPlayers}
					setTeamOne={setTeamOne}
					setTeamTwo={setTeamTwo}
				></PlayerList>
			</div>
			<div>
				<Teams 
					teamOne={teamOne} 
					teamTwo={teamTwo} 
					benchPlayers={benchPlayers}
				></Teams>
			</div>
		</div>
	);
};

export default App;
