import './Header.css';
import React from 'react';

function BodyweightCell() {
  return (
    <div className="BodyweightCell">
      <input
        placeholder="Bodyweight"
        size="10"
        type="text"
        className="weightInput"
        contentEditable={true}
      />
    </div>
  );
}

export default function Header(weekNumber) {
  return (
    <div className="Header">
      <div className="WeekNumber">
        <h2>Week 1</h2>
      </div>
      <div className="BodyweightCell">
        <BodyweightCell></BodyweightCell>
      </div>
    </div>
  );
}
