import React, { useContext } from "react";
import Toolbar from "../toolbar/Toolbar";
import PagePanel from "./PagePanel";
import { GlobalContext } from "../../GlobalState";

function RightPanel() {
  const { state, dispatch } = useContext(GlobalContext);
  const { items, history, historyIndex } = state;

  const onDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    const type = draggableElement.getAttribute("dataType");
    const updatedItems = [...items];
    if (type === "button") {
      dispatch({
        type: "SET_ITEMS",
        payload: [...items, { type: "button" }],
      });
    } else if (type === "paragraph") {
      dispatch({
        type: "SET_ITEMS",
        payload: [...items, { type: "paragraph" }],
      });
    }
    dispatch({
      type: "SET_HISTORY",
      payload: [...history.slice(0, historyIndex + 1), updatedItems],
    });
    dispatch({ type: "SET_HISTORY_INDEX", payload: historyIndex + 1 });
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
        <PagePanel />
      </div>
    </React.Fragment>
  );
}

export default RightPanel;
