import React from "react";
import "./App.css";

import Header from "./components/Header";
import PlayerList from "./components/PlayerList";
import Teams from "./components/Teams";

const App = () => {
	return (
		<div className="App">
			<Header
				title="Volleyball Team Maker"
				subTitle="Make a fair game"
			></Header>
			<div className="playerList">
				<PlayerList></PlayerList>
			</div>
			<div>
				<Teams></Teams>
			</div>
		</div>
	);
};

export default App;
