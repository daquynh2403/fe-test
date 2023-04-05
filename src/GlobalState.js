import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return { ...state, items: action.payload };
    case "SET_EDITING_BUTTON":
      return { ...state, editingButton: action.payload };
    case "SET_EDITING_PARA":
      return { ...state, editingPara: action.payload };
    case "SET_HISTORY":
      return { ...state, history: action.payload };
    case "SET_HISTORY_INDEX":
      return { ...state, historyIndex: action.payload };
    default:
      return state;
  }
};
export const initialState = {
  items: [],
  editingButton: false,
  editingPara: false,
  history: [[]],
  historyIndex: 0,
};

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
