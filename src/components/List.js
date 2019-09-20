import React from "react";

import './css/List.css'

const List = ({ title = 'Missing Title', itens }) => {
    return (
        <div classNmae="List">
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