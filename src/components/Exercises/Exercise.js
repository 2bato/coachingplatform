import './Exercise.css';
import React, { useState } from 'react';
import WeightVisualizer from './WeightVisualizer';
import RpeDropdown from './RpeDropdown';

const Exercise = ({ props, onRemoveExercise }) => {
  const handleRemoveExercise = (id) => {
    onRemoveExercise(id);
  };

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
            {props.$visualize === true ? (
              <div>
                {props.weight === 0 ? <p>BW</p> : <p>{props.weight}kg</p>}

                <WeightVisualizer
                  className="WeightVisualizer"
                  weight={props.weight}
                />
              </div>
            ) : (
              <div>
                {props.weight === 0 ? <p>BW</p> : <p>{props.weight}kg</p>}
              </div>
            )}
          </div>
          <div className="Delete">
            <button onClick={() => handleRemoveExercise(props.id)}>X</button>
          </div>
          <div className="Notes"></div>
        </div>
      ))}
    </div>
  );
};

export default Exercise;
