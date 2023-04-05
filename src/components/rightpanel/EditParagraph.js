import React, { useState } from "react";

function EditParagraph({ text, onTextChange }) {
  const [updatedText, setUpdatedText] = useState(text);
  const [editing, setEditing] = useState(false);

  const handleCLick = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    setUpdatedText(e.target.value);
    onTextChange(updatedText);
  };

  return (
    <div>
      <p
        className="rounded-md bg-white border-dotted border border-gray-500 px-8 py-3 text-medium text-gray-500"
        onClick={handleCLick}
      >
        {updatedText}
      </p>
      {editing ? (
        <div className="border-t border-gray-200 bg-gray-50 px-4 py-5 flex flex-col absolute bottom-0 left-0 w-full">
          <div className="mt-4 mb-4 w-3/12">
            <label
              htmlFor="paragraph"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Paragraph Text
            </label>
            <input
              type="text"
              name="paragraph"
              id="paragraph"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default EditParagraph;
