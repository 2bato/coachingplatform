import { useState } from 'react';
import './NewExercise.css';

export default function NewExcercise(props) {
  const [enteredMovement, setEnteredMovement] = useState('');
  const [enteredScheme, setEnteredScheme] = useState('');
  const [enteredRPE, setEnteredRPE] = useState('');
  const [enteredWeight, setEnteredWeight] = useState('');

  const movementChangeHandler = (event) => {
    setEnteredMovement(event.target.value);
  };
  const schemeChangeHandler = (event) => {
    setEnteredScheme(event.target.value);
  };
  const rpeChangeHandler = (event) => {
    setEnteredRPE(event.target.value);
  };
  const weightChangeHandler = (event) => {
    setEnteredWeight(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const exerciseData = {
      id: crypto.randomUUID(),
      movement: enteredMovement,
      scheme: enteredScheme,
      rpe: enteredRPE,
      weight: enteredWeight,
    };

    props.onSaveNewExercise(exerciseData);
    setEnteredMovement('');
    setEnteredScheme('');
    setEnteredRPE('');
    setEnteredWeight('');
  };
  return (
    <form onSubmit={submitHandler} className="NewExercise">
      <div className="InputFields">
        <div className="NewExercise-movement">
          <label>Movement</label>
          <input
            type="text"
            value={enteredMovement}
            onChange={movementChangeHandler}
          />
        </div>
        <div className="NewExercise-scheme">
          <label>Scheme</label>
          <input
            type="text"
            value={enteredScheme}
            onChange={schemeChangeHandler}
          />
        </div>
        <div className="NewExercise-rpe">
          <label>RPE</label>
          <select value={enteredRPE} onChange={rpeChangeHandler}>
            <option value="" />
            {Array.from(Array(10), (_, index) => (
              <option key={index++} value={index++}>
                {index++}
              </option>
            ))}
          </select>
        </div>
        <div className="NewExercise-weight">
          <label>Weight</label>
          <input
            type="text"
            value={enteredWeight}
            onChange={weightChangeHandler}
          />
        </div>
      </div>
      <div className="NewExercise-add">
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
