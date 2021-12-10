import logo from './logo.svg';
import './App.css';
import Heartrate from './components/Heartrate';
import Graphique from './components/Graphique';
import {useEffect, useState} from 'react';

function App() {
  const [listeFC, setFC] = useState([]); //FC = Fréquence Cardiaque

  useEffect(() => { //fonction react avec callback
    setInterval(() => {
      const FC = {
        timestamp: new Date().getTime(),
        heartrate: 40 + Math.floor(Math.random() * (200 - 40)),
      };
      setFC((previous) => {
        if (previous.length > 9) {
          previous = previous.slice(-9);
        }
        return [...previous, FC]
      });
    }, 4000); //délai d'exécution du callback
  },[]) //Fonction excécutée au lancement de l'application puis rappelée toutes les x secondes par le callback
  let FC = listeFC[listeFC.length -1];
  if (FC == null) FC = [];
  console.log(listeFC);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur l'interface de votre moniteur cardiaque.
        </p>
        <Heartrate data={FC.heartrate}/>
        <Graphique data={listeFC} />
      </header>
    </div>
  );
}

export default App;
