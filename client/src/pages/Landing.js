import React from "react";
import Button from "../components/Button";
import logo from '../logo.svg';
function Landing(props){
    console.log(props)
    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My name is {props.name}</p>
        <Button text="Bio"></Button>
        <Button text="Contact Us"></Button>
        <Button text="Lol"></Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
}
export default Landing