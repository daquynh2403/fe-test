import React from "react";

function OptionsPanel({ name }) {
  const isButtonType = name === "Button" ? true : false;

  const onDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  return (
    <div className="m-4">
      {isButtonType ? (
        <button
          id="draggable-button"
          draggable="true"
          className="rounded-md bg-white px-2.5 py-1.5 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          datatype="button"
          onDragStart={onDragStart}
        >
          {name}
        </button>
      ) : (
        <p
          id="draggable-paragraph"
          draggable="true"
          className="rounded-md bg-white border-dotted border border-gray-500 px-4 py-1.5 text-lg"
          datatype="paragraph"
          onDragStart={onDragStart}
        >
          {name}
        </p>
      )}
    </div>
  );
}

export default OptionsPanel;
