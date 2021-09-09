import React, { useState } from 'react';
import "./App.css";
import Board from "./components/Board";
import Popup from "./components/Popup";

//IMPORTED COMPONENTS ABOVE

//USESTATE

function App() { 
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <h1 style={{ fontFamily: "Arial" }}>CAPSTONE II-MINESWEEPER</h1>
      <Board />  
      <h3>Goal Of The Game:</h3>
      <ul>
        <li>In order to win, reveal all the safe squares on the board without exploding a mine. For a bigger challenge try to solve the puzzle as quickly as possible and beat record times.</li>
      </ul>

      <input id="Button"
      type="button"
      value="Help!"
      onClick={togglePopup} />
      {isOpen && <Popup
        content={<>
          <b>Minesweeper HowTo:</b>
          <p>You can start by clicking at any random place since it is your first game.</p>
          <p>Try click as many blocks as possible without exploding the board</p>
          <p>Right click once a mine has been confirmed to add the red flag</p>
          <p>The number on the block you click shows the mines adjacent to it.</p>
          <p>Have fun and try beat times</p>
        </>}
        handleClose={togglePopup}
      />}
          
          
    
    </div>
  );
}
export default App;
      

      
        
