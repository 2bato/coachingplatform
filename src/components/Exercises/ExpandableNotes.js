import React, { useState } from 'react';

const ExpandableNotes = ({ notes }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const clickHandler = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button onClick={clickHandler}>v</button>
      {isExpanded && <div>{notes}</div>}
    </div>
  );
};

export default ExpandableNotes;
