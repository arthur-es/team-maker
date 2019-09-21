import React from "react";

import List from "./List";
import './../styles/Teams.css'

const Teams = ({class_name, teamOne, teamTwo, benchPlayers}) => {
    return (
        <div className={class_name}>
            <h1 className="teams-title">Teams</h1>
            <List 
                class_name="app-team-one"
                itens={teamOne} 
                title="Team One">
            </List>
            <List
                class_name="app-team-two" 
                itens={teamTwo} 
                title="Team Two">
            </List>
            {
                benchPlayers.length === 0 ? false : 
                <List 
                    class_name="app-bench-players"
                    itens={benchPlayers} 
                    title="Bench Players">
                </List>
            }
        </div>
    )
}

export default Teams;