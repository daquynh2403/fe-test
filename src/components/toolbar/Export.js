import React from "react";

function Export() {
  const handleExport = () => {
    const data = localStorage.getItem("items");
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "items.json";
    a.click();
  };
  return (
    <button
      onClick={handleExport}
      className="rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white py-2 px-4 font-semibold"
    >
      Export
    </button>
  );
}

export default Export;
