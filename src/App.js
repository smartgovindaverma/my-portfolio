import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Hi, My Name is</p>
      <span>Govinda Verma</span>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Software Developer
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         About me
        </a>
      </header>
    </div>
  );
}

export default App;
