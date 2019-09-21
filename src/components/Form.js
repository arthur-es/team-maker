import React, { useState } from "react";

import './../styles/Form.css'

const Form = ({addPlayer, class_name}) => {
	
	const [ name, setName ] = useState("");
	const [ skill, setSkill ] = useState(3);

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
				<select defaultValue={3} onChange={ (e) => setSkill(e.target.value) }>
					<option value={1}> 1 </option>
					<option value={2}> 2 </option>
					<option value={3}> 3 </option>
					<option value={4}> 4 </option>
					<option value={5}> 5 </option>
				</select>
				<button type="submit"> Add Player </button>
			</form>
		</div>
	);
};

export default Form;
