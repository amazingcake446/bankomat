import logo from './logo.svg';
import './App.css';
import {  useState } from 'react';
import Atm from './Atm'


function App() {

  const [showAtm, setShowAtm] = useState(false);

  const toggleAtm = () => {
    setShowAtm(!showAtm);

    }
    
   
  
  return (
    <div className="App">
      <button onClick={toggleAtm}>Show</button>
     {showAtm && <Atm />} 
    </div>
  );
}

export default App;
