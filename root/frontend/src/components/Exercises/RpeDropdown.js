import React, { useState } from 'react';

const RpeDropdown = ({ rpe }) => {
  const [RPE, setRPE] = useState(rpe);
  const [options] = useState(Array.from(Array(10), (_, index) => ++index));

  const clickHandler = (event) => {
    setRPE(event.target.value);
  };

  return (
    <div className="RpeButton">
      <select value={RPE || ''} onChange={clickHandler}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RpeDropdown;
