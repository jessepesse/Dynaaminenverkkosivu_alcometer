import './App.css';
import {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(90);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [endresult, setEndresult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let result = 0;
    let er = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsl = grams - (burning * time)

    if (gender === 'male') {
      result = gramsl / (weight * 0.7)
    }
    else {
      result = gramsl / (weight * 0.6)
    }
    
    if (result < 0) {
      er = 0;
     }
     
     setEndresult(er)
  }


  return (
    <div>
    <h3>Calculate your alchol blood level</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight</label>
        <input type="number" step="1" value={weight}
        onChange={(e) => setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Bottles</label>
        <select>
          <option defaultValue value="0" onChange={(e) => setBottles(e.target.value)}>0</option>
          <option value="1" onChange={(e) => setBottles(e.target.value)}>1</option>
          <option value="2" onChange={(e) => setBottles(e.target.value)}>2</option>
          <option value="3" onChange={(e) => setBottles(e.target.value)}>3</option>
          <option value="4" onChange={(e) => setBottles(e.target.value)}>4</option>
          <option value="5" onChange={(e) => setBottles(e.target.value)}>5</option>
          <option value="6" onChange={(e) => setBottles(e.target.value)}>6</option>
          <option value="7" onChange={(e) => setBottles(e.target.value)}>7</option>
          <option value="8" onChange={(e) => setBottles(e.target.value)}>8</option>
          <option value="9" onChange={(e) => setBottles(e.target.value)}>9</option>
          <option value="10" onChange={(e) => setBottles(e.target.value)}>10</option>
          <option value="11" onChange={(e) => setBottles(e.target.value)}>11</option>
          <option value="12" onChange={(e) => setBottles(e.target.value)}>12</option>
        </select>
      </div>
      <div>
        <label>Time</label>
        <select>
        <option defaultValue value="1" onChange={(e) => setTime(e.target.value)}>1</option>
        <option value="2" onChange={(e) => setTime(e.target.value)}>2</option>
        <option value="3" onChange={(e) => setTime(e.target.value)}>3</option>
        <option value="4" onChange={(e) => setTime(e.target.value)}>4</option>
        <option value="5" onChange={(e) => setTime(e.target.value)}>5</option>
        <option value="6" onChange={(e) => setTime(e.target.value)}>6</option>
        <option value="7" onChange={(e) => setTime(e.target.value)}>7</option>
        <option value="8" onChange={(e) => setTime(e.target.value)}>8</option>
        <option value="9" onChange={(e) => setTime(e.target.value)}>9</option>
        <option value="10" onChange={(e) => setTime(e.target.value)}>10</option>
        <option value="11" onChange={(e) => setTime(e.target.value)}>11</option>
        <option value="12" onChange={(e) => setTime(e.target.value)}>12</option>
        </select>
      </div>
      <div>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" value="male" defaultChecked 
        onChange={(e) => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" value="female"
        onChange={(e) => setGender(e.target.value)} /><label>Female</label>
      </div>
      <div>
        <output>{endresult}</output>
      </div>
      <button>Calculate</button>
    </form>
    </div>
  );
}

export default App;
