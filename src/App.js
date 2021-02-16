import { useState } from "react"

import logo from './logo.svg';
import './App.css';
import HelloWorld from "./HelloWorld"
import Input from "./Input"
import Loops from "./Loops"
import AsyncData from "./AsyncData"

function App() {
	const [value, setValue] = useState("")
	const [greeting, setGreeting] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <Loops />
        <Input value={value} onChange={setValue} label="Name" />
        <Input value={greeting} onChange={setGreeting} label="Greeting" />
        <HelloWorld name={value} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <AsyncData />
      </header>
    </div>
  );
}

export default App;
