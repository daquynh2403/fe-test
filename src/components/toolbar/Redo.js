import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalState";

function Redo() {
  const { state, dispatch } = useContext(GlobalContext);
  const { history, historyIndex } = state;
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      dispatch({
        type: "SET_ITEMS",
        payload: history[historyIndex + 1],
      });
      dispatch({ type: "SET_HISTORY_INDEX", payload: historyIndex + 1 });
      dispatch({ type: "SET_EDITING_BUTTON", payload: false });
      dispatch({ type: "SET_EDITING_PARA", payload: false });
    }
  };
  return (
    <button
      disabled={historyIndex === history.length - 1}
      onClick={handleRedo}
      className="rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white py-2 px-4 font-semibold"
    >
      Redo
    </button>
  );
}

export default Redo;
