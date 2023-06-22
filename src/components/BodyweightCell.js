import './BodyweightCell.css';
import React from 'react';

export default function BodyweightCell() {
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
