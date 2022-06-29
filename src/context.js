// context creation
// provider
// consumer
// useContext Hook
import React from "react";
const AppContext = React.createContext();

// provider function
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"Tech News Website"}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
