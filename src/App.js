import logo from './logo.svg';
import './App.css';
import Heartrate from './components/Heartrate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur l'interface de votre moniteur cardiaque.
        </p>
        <Heartrate/>
      </header>
    </div>
  );
}

export default App;
