import { useState, useContext } from 'react';
import './NewExercise.css';
import { TabContext } from '../Context/TabProvider';

export default function NewExcercise(props) {
  const context = useContext(TabContext);

  const [enteredMovement, setEnteredMovement] = useState('');
  const [enteredScheme, setEnteredScheme] = useState('');
  const [enteredRPE, setEnteredRPE] = useState('');
  const [enteredWeight, setEnteredWeight] = useState('');
  const [enteredVisualize, setEnteredVisualize] = useState(false);

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

  const visualizeChangeHandler = (event) => {
    setEnteredVisualize(event.target.checked);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const exerciseData = {
      id: crypto.randomUUID(),
      movement: enteredMovement,
      scheme: enteredScheme,
      rpe: enteredRPE,
      weight: enteredWeight,
      day: context.activeTab,
      $visualize: enteredVisualize,
    };

    props.onSaveNewExercise(exerciseData);
    setEnteredMovement('');
    setEnteredScheme('');
    setEnteredRPE('');
    setEnteredWeight('');
    setEnteredVisualize(false);
  };
  return (
    <form onSubmit={submitHandler} className="NewExercise">
      <div className="InputFields">
        <div className="first-row">
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
        </div>
        <div className="second-row">
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
              type="number"
              value={enteredWeight}
              onChange={weightChangeHandler}
            />
          </div>
          <div className="NewExercise-visualize">
            <label>Loader</label>
            <input
              type="checkbox"
              checked={enteredVisualize}
              onChange={visualizeChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="NewExercise-add">
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
