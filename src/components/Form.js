import React, { useState } from "react";

import './../styles/Form.css'

const Form = ({addPlayer, class_name}) => {
	
	const [ name, setName ] = useState("");
	const [ skill, setSkill ] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addPlayer(name, skill);		
		setName('');
	}

	return (
		<div className={class_name}>
			<form onSubmit={handleSubmit}>
				<input 
					type="text" 
					id="playerNameInput" 
					value={name} 
					required
					onChange={(e) => setName(e.target.value)} 	
				/>
				<select onChange={(e) => setSkill(e.target.value)}>
					<option> 1 </option>
					<option> 2 </option>
					<option> 3 </option>
					<option> 4 </option>
					<option> 5 </option>
				</select>
				<button type="submit"> Add Player </button>
			</form>
		</div>
	);
};

export default Form;
