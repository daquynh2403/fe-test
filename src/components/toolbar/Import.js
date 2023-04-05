import React, { useEffect } from "react";

function Import() {
  const handleImport = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = JSON.parse(event.target.result);
      localStorage.setItem("loadData", data);
    };
    reader.readAsText(file);
  };

  return (
    <input
      type="file"
      onChange={handleImport}
      className="rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white py-2 px-4 font-semibold"
    />
  );
}

export default Import;
