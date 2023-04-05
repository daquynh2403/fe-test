import React from "react";

function Save() {
  const data = localStorage.getItem("items");
  const handleClick = () => {
    console.log(JSON.parse(data));
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
