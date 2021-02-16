import { useState } from "react"

import logo from './logo.svg';
import './App.css';
import HelloWorld from "./HelloWorld"
import Input from "./Input"

function App() {
	const [value, setValue] = useState("")
	const [greeting, setGreeting] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
      </header>
    </div>
  );
}

export default App;
