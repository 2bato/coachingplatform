import React, { useContext } from 'react';
import './DayTab.css';
import Exercise from './Exercises/Exercise';
import { TabContext } from './Context/TabProvider';
import corgi from '../assets/corgi.png';

const DayTab = ({ props, onRemoveExercise }) => {
  const { activeTab, switchTab } = useContext(TabContext);
  const dayNames = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

  const tabClickHandler = (tabIndex) => {
    switchTab(tabIndex);
  };

  return (
    <div className="Overall">
      <div className="Tabs">
        {dayNames.map((day, index) => (
          <button
            key={index}
            className={index === activeTab ? 'activeTab' : ''}
            onClick={() => tabClickHandler(index)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="Tab-content">
        {props.filter((exercise) => exercise.day === activeTab).length === 0 ? (
          <div>
            <img src={corgi} className="corgi" />
            <p>Rest day!</p>
          </div>
        ) : (
          <Exercise
            props={props.filter((exercise) => exercise.day === activeTab)}
            onRemoveExercise={onRemoveExercise}
          />
        )}
      </div>
    </div>
  );
};

export default DayTab;
