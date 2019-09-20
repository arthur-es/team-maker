import React from "react";
import List from "./List";

const Teams = ({teamOne, teamTwo, benchPlayers}) => {
    return (
        <div>
            <h1 className="teams-title">Teams</h1>
            <div className="app-team-one">
                <List itens={teamOne} title="Team One"></List>
            </div>
            <div className="app-team-two">
                <List itens={teamTwo} title="Team Two"></List>
            </div>
            {
                benchPlayers.length === 0 ? false : 
                <div>
                    <List itens={benchPlayers} title="Bench Players"></List>
                </div>
            }
        </div>
    )
}

export default Teams;