import React, {useState} from 'react';
import Counter from './counter';
import './App.css';

function App() {
  let [count,setCount] = useState(0)
  let [isMorning, setMorning] = useState(false)


  return (
    <div className={`app ${isMorning ? 'time': ''}`}>
      <h2>Good {isMorning ? 'Moring' : 'Night'}</h2>
      <Counter counter={count}/>
      <button onClick={()=>setCount(++count)}>Next Count</button>
      <button onClick={()=>setMorning(!isMorning)}>Update</button>
    </div>
  );
}

export default App;