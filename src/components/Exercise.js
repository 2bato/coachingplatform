import './Exercise.css';
import React, { useState } from 'react';

function RpeDropdown() {
  const [selectedOption, setSelectedOption] = useState('');
  const [options] = useState(Array.from(Array(10), (_, index) => ++index));

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option>RPE</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function Exercise() {
  const exercises = [
    {
      movement: 'Low Bar Paused Squat',
      scheme: '1 set of 4',
      rpe: 7,
      weight: '215 kg',
    },
    {
      movement: 'Low Bar Comp Squat',
      scheme: '2 sets of 6',
      rpe: 6,
      weight: '175 kg',
    },
    {
      movement: 'Tempo Paused Bench',
      scheme: '3 sets of 7',
      rpe: 7,
      weight: '125 kg',
    },
  ];
  return (
    <div className="Exercise">
      {exercises.map((exercise, index) => (
        <div key={index} className="Exercise-Item">
          <div className="Movement">
            <p>{exercise.movement}</p>
          </div>
          <div className="Scheme">
            <p>{exercise.scheme}</p>
          </div>
          <div className="RpeDropdown">
            <RpeDropdown/>
          </div>
          <div className="Weight">
            <p>{exercise.weight}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
