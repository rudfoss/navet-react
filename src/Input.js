import { useState } from "react"

import classes from "./Input.module.css"

function Input() {
	const [value, setValue] = useState("")

	function onInputChange(evt) {
		setValue(evt.target.value)
	}

	return (
		<div className={classes.container}>
			<label htmlFor="input-text">Input your name: {value}</label>
			<input id="input-text" type="text" value={value} onChange={onInputChange}/>
		</div>
	)
}

export default Input