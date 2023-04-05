import React, { useState } from "react";
import Toolbar from "../toolbar/Toolbar";
import PagePanel from "./PagePanel";

function RightPanel() {
  const [items, setItems] = useState([]);
  const onDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    const type = draggableElement.getAttribute("dataType");
    if (type === "button") {
      setItems([...items, { type: "button" }]);
    } else if (type === "paragraph") {
      setItems([...items, { type: "paragraph" }]);
    }
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Toolbar />
      <div
        className="p-6 flex flex-col justify-center items-center flex-1 relative"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <PagePanel items={items} />
      </div>
    </React.Fragment>
  );
}

export default RightPanel;
