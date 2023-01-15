import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Wroclaw" />
        <footer>
          This Project was coded by 
          <a
          href="https://nathalero.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          > Nathalie Lesmes Rodriguez </a>
          and is <br/> Open-Sourced on {" "} 
          <a
            href="https://github.com/nathalero"
            target="_blank"
            rel="noopener noreferrer"
          > GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}