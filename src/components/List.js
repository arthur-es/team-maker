import React from "react";

const List = ({ itens }) => {
    return (
        <div>
            <ul>
                {itens.map((player) => {
                  return <li key="player.id">{player.name}</li>
                })}
            </ul>
        </div>
    )
}

export default List;