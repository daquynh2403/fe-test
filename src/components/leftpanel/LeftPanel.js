import React from "react";
import OptionsPanel from "./OptionsPanel";

function LeftPanel() {
  return (
    <div className="p-6 flex flex-col justify-center items-center flex-1 relative">
      <OptionsPanel name="Button" />
      <OptionsPanel name="Paragraph" />
    </div>
  );
}

export default LeftPanel;
