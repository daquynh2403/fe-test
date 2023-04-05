import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalState";

function Undo() {
  const { state, dispatch } = useContext(GlobalContext);
  const { history, historyIndex } = state;
  const handleUndo = () => {
    if (historyIndex > 0) {
      dispatch({
        type: "SET_ITEMS",
        payload: history[historyIndex - 1],
      });
      dispatch({ type: "SET_HISTORY_INDEX", payload: historyIndex - 1 });
      dispatch({ type: "SET_EDITING_BUTTON", payload: false });
      dispatch({ type: "SET_EDITING_PARA", payload: false });
    }
  };
  return (
    <button
      disabled={historyIndex === 0}
      onClick={handleUndo}
      className="rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white py-2 px-4 font-semibold"
    >
      Undo
    </button>
  );
}

export default Undo;
