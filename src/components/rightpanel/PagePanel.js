import React, { useEffect, useState } from "react";
import EditParagraph from "./EditParagraph";
import EditButton from "./EditButton";

function PagePanel({ items }) {
  const [itemsData, setItemsData] = useState([]);
  const handleTextChange = (index, type, text) => {
    const updatedItems = [...itemsData];
    updatedItems[index] = { type, text };
    setItemsData(updatedItems);
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemsData));
  }, [itemsData]);

  return (
    <React.Fragment>
      {items.map((item, index) => {
        if (item.type === "button") {
          return (
            <EditButton
              key={index}
              text="Button"
              onTextChange={(text) => handleTextChange(index, item.type, text)}
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
      {/* <button onClick={handleSave}>Save</button> */}
    </React.Fragment>
  );
}

export default PagePanel;
