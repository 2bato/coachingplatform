import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';

const ExpandableNotes = ({ notes }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const clickHandler = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button className={isExpanded ? 'active' : ''} onClick={clickHandler}>
        <MdExpandMore />
      </button>
      {isExpanded && <div>{notes}</div>}
    </div>
  );
};

export default ExpandableNotes;
