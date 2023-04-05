import React from "react";
import Save from "./Save";
import View from "./View";
import Export from "./Export";
import Import from "./Import";
import Undo from "./Undo";
import Redo from "./Redo";

function Toolbar() {
  return (
    <div className="border-b border-gray-200 bg-gray-50 px-4 py-5 w-full">
      <Save />
      <Undo />
      <Redo />
      <Export />
      <Import />
      <View />
    </div>
  );
}

export default Toolbar;
