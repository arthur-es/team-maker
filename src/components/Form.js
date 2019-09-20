import React, { useState } from "react";

const Form = ({addPlayer}) => {
	
	const [ name, setName ] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addPlayer(name);		
		setName('');
	}

	return (
		<div className="app-form">
			<form onSubmit={handleSubmit}>
				<input 
					type="text" 
					id="playerNameInput" 
					value={name} 
					required
					onChange={(e) => setName(e.target.value)} 	
				/>
				<button type="submit"> Add Player </button>
			</form>
		</div>
	);
};

export default Form;
