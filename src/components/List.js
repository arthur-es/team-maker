import React from "react";

const List = ({ title = 'Missing Title', itens }) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {itens.map((player) => {
                  return <li key={player.name}>{player.name}</li>
                })}
            </ul>
        </div>
    )
}

export default List;