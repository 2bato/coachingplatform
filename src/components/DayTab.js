import React, { useContext } from 'react';
import './DayTabs.css';
import Exercise from './Exercise';
import { TabContext } from './Context/TabProvider';

const DayTab = ({ props }) => {
  const { activeTab, switchTab } = useContext(TabContext);
  const tabContent = [
    <div>
      1
      <Exercise props={props} />
    </div>,
    <div>2 </div>,
    <div>
      3
      <Exercise props={props} />
    </div>,
    <div>
      4<Exercise props={props} />
    </div>,
  ];

  const tabClickHandler = (tabIndex) => {
    switchTab(tabIndex);
  };

  return (
    <div>
      <div className="tab-buttons">
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
