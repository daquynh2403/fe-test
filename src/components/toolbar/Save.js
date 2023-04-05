import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalState";

function Save() {
  const { state, dispatch } = useContext(GlobalContext);
  const { items, history, historyIndex } = state;
  const data = localStorage.getItem("items");

  const handleClick = () => {
    console.log(data);
    const updatedItems = [...items];

    dispatch({ type: "SET_ITEMS", payload: updatedItems });
    dispatch({
      type: "SET_HISTORY",
      payload: [...history.slice(0, historyIndex + 1), updatedItems],
    });
    dispatch({ type: "SET_HISTORY_INDEX", payload: historyIndex + 1 });
    dispatch({ type: "SET_EDITING_BUTTON", payload: false });
    dispatch({ type: "SET_EDITING_PARA", payload: false });
  };
  return (
    <button
      onClick={handleClick}
      className="rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white py-2 px-4 font-semibold"
    >
      Save
    </button>
  );
}

export default Save;
