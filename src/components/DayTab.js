import React, { useContext, useState } from 'react';
import './DayTab.css';
import Exercise from './Exercise';
import { TabContext } from './Tabs/TabProvider';
import image from '../assets/corgi.png';

const DayTab = ({ props }) => {
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
            className={index === activeTab ? 'active' : ''}
            onClick={() => tabClickHandler(index)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="Tab-content">
        {props.filter((exercise) => exercise.day === activeTab).length === 0 ? (
          <div>
            <img src={image} className="image" />
            <p>Rest day!</p>
          </div>
        ) : (
          <Exercise
            props={props.filter((exercise) => exercise.day === activeTab)}
          />
        )}
      </div>
    </div>
  );
};

export default DayTab;