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

export default function Exercise({props}) {
 
  return (
    <div className="Exercise">
      {props.map((props, index) => (
        <div key={index} className="Exercise-Item">
          <div className="Movement">
            <p>{props.movement}</p>
          </div>
          <div className="Scheme">
            <p>{props.scheme}</p>
          </div>
          <div className="RpeDropdown">
            <RpeDropdown/>
          </div>
          <div className="Weight">
            <p>{props.weight}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
