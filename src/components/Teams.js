import React from "react";
import List from "./List";

const teamOne = [
    { id: "Arthur", name: "Arthur", skill: 4},
    { id: "Lucas", name: "Lucas", skill: 4},
    { id: "Sarah", name: "Sarah", skill: 2}
]

const teamTwo = [
    { id: "Stephany", name: "Stephany", skill: 4},
    { id: "Luquinhas", name: "Luqinhas", skill: 4},
    { id: "Arturito", name: "Arturito", skill: 2}
]

const Teams = () => {
    return (
        <div>
            <h1>Teams</h1>
            <div>
                <List itens={teamOne} title="Team One"></List>
                <List itens={teamTwo} title="Team Two"></List>
            </div>
        </div>
    )
}

export default Teams;