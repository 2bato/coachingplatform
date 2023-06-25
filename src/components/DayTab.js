import React, { useContext, useState } from 'react';
import './DayTab.css';
import Exercise from './Exercise';
import { TabContext } from './Tabs/TabProvider';

const DayTab = ({ props }) => {
  const { activeTab, switchTab } = useContext(TabContext);
  const tabContent = [
    <div>
      <Exercise
        props={props.filter((exercise) => exercise.day === activeTab)}
      />
    </div>,
    <div>
      <Exercise
        props={props.filter((exercise) => exercise.day === activeTab)}
      />
    </div>,
    <div>
      <Exercise
        props={props.filter((exercise) => exercise.day === activeTab)}
      />
    </div>,
    <div>
      <Exercise
        props={props.filter((exercise) => exercise.day === activeTab)}
      />
    </div>,
  ];

  const tabClickHandler = (tabIndex) => {
    switchTab(tabIndex);
  };

  return (
    <div className="Overall">
      <div className="Tabs">
        {tabContent.map((cotent, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => tabClickHandler(index)}
          >
            Day {index + 1}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabContent[activeTab]}</div>
    </div>
  );
};

export default DayTab;
