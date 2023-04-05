import React, { useEffect, useState, useContext } from "react";
import EditParagraph from "./EditParagraph";
import EditButton from "./EditButton";
import { GlobalContext } from "../../GlobalState";

function PagePanel() {
  const { state, dispatch } = useContext(GlobalContext);
  const { items, history, historyIndex } = state;

  const handleTextChange = (index, type, text, alert) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      type: type,
      text: text,
      alert: alert,
    };
    dispatch({ type: "SET_ITEMS", payload: updatedItems });
    dispatch({
      type: "SET_HISTORY",
      payload: [...history.slice(0, historyIndex + 1), updatedItems],
    });
    dispatch({ type: "SET_HISTORY_INDEX", payload: historyIndex + 1 });
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <React.Fragment>
      {items.map((item, index) => {
        if (item.type === "button") {
          return (
            <EditButton
              key={index}
              text="Button"
              onTextChange={(newText, newAlert) =>
                handleTextChange(index, item.type, newText, newAlert)
              }
            />
          );
        } else if (item.type === "paragraph") {
          return (
            <EditParagraph
              key={index}
              text="Edit this paragraph..."
              onTextChange={(text) => handleTextChange(index, item.type, text)}
            />
          );
        } else {
          return null;
        }
      })}
    </React.Fragment>
  );
}

export default PagePanel;
