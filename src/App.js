import logo from './logo.svg';
import './App.css';
import image from './image.webp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <h1> Hello World!</h1>
        <p>Project is running on <b>{process.env.REACT_APP_ENV}</b> - env variable</p>
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

export default App