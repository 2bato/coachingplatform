import React, {createContext, useState} from 'react';

export const TabContext = createContext();


export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const switchTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <TabContext.Provider value={{ activeTab, switchTab }}>
      {children}
    </TabContext.Provider>
  );
};