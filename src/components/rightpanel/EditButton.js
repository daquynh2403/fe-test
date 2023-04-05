import React, { useEffect, useState } from "react";

function EditButton({ text, onTextChange }) {
  const [editing, setEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(text);
  const [alertText, setAlertText] = useState("");

  const handleClick = () => {
    setEditing(!editing);
  };

  const handleButtonChange = (e) => {
    setUpdatedText(e.target.value);
    onTextChange(updatedText);
  };

  const handleAlertChange = (e) => {
    setAlertText(e.target.value);
  };

  return (
    <div>
      <button
        className="rounded-md bg-white px-2.5 py-1.5 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-4"
        onClick={handleClick}
      >
        {updatedText}
      </button>
      {editing ? (
        <div className="border-t border-gray-200 bg-gray-50 px-4 py-5 flex flex-col absolute bottom-0 left-0 w-full">
          <form>
            <div className="mt-4 mb-4 w-3/12">
              <label
                htmlFor="buttonText"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Button text
              </label>
              <input
                type="text"
                name="buttonText"
                id="buttonText"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleButtonChange}
              />
            </div>
            <div className="mt-4 mb-4 w-3/12">
              <label
                htmlFor="alertText"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Alert message
              </label>
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="alertText"
                id="alertText"
                onChange={handleAlertChange}
              />
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default EditButton;
