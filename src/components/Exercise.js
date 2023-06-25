import './Exercise.css';
import React, { useState } from 'react';
import WeightVisualizer from './WeightVisualizer';

function RpeDropdown({ rpe }) {
  const [RPE, setRPE] = useState(rpe);
  const [options] = useState(Array.from(Array(10), (_, index) => ++index));

  const clickHandler = (event) => {
    setRPE(event.target.value);
  };

  return (
    <div className="RpeButton">
      <select value={RPE} onChange={clickHandler}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function Exercise({ props }) {
  return (
    <div className="Exercise">
      <div className="Exercise-Label">
        <div className="Movement">
          <p>Movement</p>
        </div>
        <div className="Scheme">
          <p>Scheme</p>
        </div>
        <div className="RpeDropdown">
          <p>RPE</p>
        </div>
        <div className="Weight">
          <p>Weight</p>
        </div>
      </div>
      {props.map((props) => (
        <div
          className="Exercise-Item"
          key={props.id}
          day={props.day}
          visualize={props.visualize}
        >
          <div className="Movement">
            <p>{props.movement}</p>
          </div>
          <div className="Scheme">
            <p>{props.scheme}</p>
          </div>
          <div className="RpeDropdown">
            <RpeDropdown rpe={props.rpe} />
          </div>
          <div className="Weight">
            {props.visualize === true ? (
              <div>
                <p>{props.weight}kg</p>
                <WeightVisualizer
                  className="WeightVisualizer"
                  weight={props.weight}
                />
              </div>
            ) : (
              <p>{props.weight}kg</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
