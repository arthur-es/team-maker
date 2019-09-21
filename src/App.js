import React, {useState} from "react";

import "./styles/App.css";
import Header from "./components/Header";
import PlayerList from "./components/PlayerList";
import Teams from "./components/Teams";

const App = () => {
	const [teamOne, setTeamOne] = useState([]);
	const [teamTwo, setTeamTwo] = useState([]);
	const [benchPlayers, setBenchPlayers] = useState([]);
	
	return (
		<div className="App">
			<Header
			class_name="Header"
			title="Team Picker"
			subTitle="Make a fair game"
			></Header>
			<div className="Body">
				<PlayerList 
					class_name="PlayerList"
					setBenchPlayers={setBenchPlayers}
					benchPlayers={benchPlayers}
					setTeamOne={setTeamOne}
					setTeamTwo={setTeamTwo}
				></PlayerList>
				<Teams 
					class_name="Teams"
					teamOne={teamOne} 
					teamTwo={teamTwo} 
					benchPlayers={benchPlayers}
				></Teams>
			</div>
		</div>
	);
};
	
export default App;
	