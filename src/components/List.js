import React from "react";

import './../styles/List.css'

const List = ({ title = 'Missing Title', itens, class_name }) => {
    return (
        <div className={class_name}>
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