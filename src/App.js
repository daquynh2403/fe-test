import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import LeftPanel from "./components/leftpanel/LeftPanel.js";
import RightPanel from "./components/rightpanel/RightPanel.js";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="flex flex-row h-screen overflow-hidden">
          <div className="flex-[0_0_20%] bg-[#F0F0F0] flex justify-center items-center">
            <LeftPanel />
          </div>
          <div className="flex-1 bg-white flex flex-col">
            <RightPanel />
          </div>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
