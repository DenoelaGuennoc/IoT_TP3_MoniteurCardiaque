import logo from './logo.svg';
import './App.css';
import Heartrate from './components/Heartrate';
import {useEffect, useState} from 'react';

function App() {
  const [rythmeCardiaque, setRythmeCardiaque] = useState(0); 

  useEffect(() => { //fonction react avec callback
    setInterval(() => {
      setRythmeCardiaque(40 + Math.floor(Math.random() * (200 - 40)));
    }, 4000); //délai d'exécution du callback
  },[]) //Fonction excécutée au lancement de l'application puis rappelée toutes les x secondes par le callback

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur l'interface de votre moniteur cardiaque.
        </p>
        <Heartrate data={rythmeCardiaque}/>
      </header>
    </div>
  );
}

export default App;
