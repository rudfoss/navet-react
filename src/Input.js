import classes from "./Input.module.css"

function Input(props) {
	function onInputChange(evt) {
		props.onChange(evt.target.value)
	}

	return (
		<div className={classes.container}>
			<label htmlFor="input-text">{props.label}</label>
			<input id="input-text" type="text" value={props.value} onChange={onInputChange}/>
		</div>
	)
}

export default Input