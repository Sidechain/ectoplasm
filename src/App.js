import './App.css';
import { useState } from 'react';
import { EventGenerator } from './EventGenerator';
import events from './events'

function App() {
  const [diceSum, setDiceSum] = useState(null)
  const [diceAmount, setDiceAmount] = useState("")
  const [rolls, setRolls] = useState([])

  const diceRoll = diceAmount => {
    let rolls = []
    let rollSum = 0
    for (let i = 0; i < diceAmount; i++) {
      rolls[i] = Math.floor(Math.random() * 6) +1
      rollSum += rolls[i]
    }
    setDiceAmount(diceAmount)
    setRolls(rolls)
    setDiceSum(rollSum)
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="buttons">
        {[1, 2, 3, 4, 5].map(number => {
          let text = number === 1 ? "die" : "dice"
          return (
            <button
              key={number}
              onClick={() => diceRoll(number)}
              className="button">
                {number} {text}
              </button>
          )
        })}
        <p>You threw {diceAmount} dice for a total sum of {diceSum}</p>
        {rolls.map(e => <p>{e}</p>)}
        <>
        <EventGenerator 
          title={events[0].title} 
          text={events[0].text} 
          image={events[0].image} 
          modifier={events[0].modifier}/>
        </>
      </div>
      </header>
    </div>
  );
}

export default App;
