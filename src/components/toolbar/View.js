import React from "react";
import ReactDOM from "react-dom";

function View() {
  const handleGenerate = () => {
    const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
    const itemsToRender = [];

    for (let i = 0; i < itemsFromLocalStorage.length; i++) {
      const item = itemsFromLocalStorage[i];

      if (item.type === "button") {
        itemsToRender.push(
          <button
            key={i}
            className="rounded-md bg-white px-2.5 py-1.5 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-4"
          >
            {item.text}
          </button>
        );
      } else if (item.type === "paragraph") {
        itemsToRender.push(
          <p
            key={i}
            className="rounded-md bg-white border-dotted border border-gray-500 px-8 py-3 text-medium text-gray-500"
          >
            {item.text}
          </p>
        );
      }
    }

    document.body.innerHTML = "";
    ReactDOM.render(
      <div className="p-6 flex flex-col justify-center items-center flex-1 relative">
        {itemsToRender}
      </div>,
      document.body
    );
  };
  return (
    <button
      onClick={handleGenerate}
      className="rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white py-2 px-4 font-semibold"
    >
      View
    </button>
  );
}

export default View;
