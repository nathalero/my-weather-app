import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
          WEATHER APP        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>By 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           Nathalie Lesmes Rodriguez
        </a></p>
      </header>
    </div>
  );
}

export default App;
