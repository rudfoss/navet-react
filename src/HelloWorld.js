import { useState } from "react"

function HelloWorld(props) {
	// let isHello = true
	const [isHello, setIsHello] = useState(true)
	// const helloState = useState(true)
	// const isHello = helloState[0] // true / false
	// const setIsHello = helloState[1]

	const buttonClick = () => {
		// isHello = !isHello
		setIsHello(!isHello)
	}
	// function onClick() {

	// }

	return <>
		<button onClick={buttonClick}>Click me</button>
		<p>{isHello ? "Hello" : "Goodbye"} {props.name}</p>
	</>
}

export default HelloWorld