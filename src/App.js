import logo from './logo.svg';
import './App.css';
import Heartrate from './components/Heartrate';
import {useEffect, useState} from 'react';

function App() {
  const [listeFC, setFC] = useState([0]); //FC = Fréquence Cardiaque

  useEffect(() => { //fonction react avec callback
    setInterval(() => {
      const FC = {
        timestamp: new Date().getTime(),
        heartrate: 40 + Math.floor(Math.random() * (200 - 40)),
      };
      setFC((previous) => [...previous, FC]);
    }, 4000); //délai d'exécution du callback
  },[]) //Fonction excécutée au lancement de l'application puis rappelée toutes les x secondes par le callback
  const FC = listeFC[listeFC.length -1]; 
  console.log(listeFC);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur l'interface de votre moniteur cardiaque.
        </p>
        <Heartrate data={FC.heartrate}/>
      </header>
    </div>
  );
}

export default App;
