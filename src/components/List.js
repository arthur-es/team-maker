import React from "react";

const List = ({ title = 'Missing Title', itens }) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {itens.map((item) => {
                  return <li key={item.name}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}

export default List;