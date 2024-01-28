import React from "react";

function AddItems({
  userValue,
  setUserValue,
  handleSubmit,
  edit,
  handleUpdate,
}) {
  return (
    // Add items form
    <form className="w-1/2 flex flex-col items-start" onSubmit={handleSubmit}>
      {/* Edit state */}
      {edit ? (
        <div>
          <label className="font-medium my-2">Add Item</label>
          <input
            type="text"
            name="items"
            className="w-full py-1 rounded-md px-2"
            value={userValue}
            onChange={(e) => setUserValue(e.target.value)}
          />
          <button
            className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md font-medium"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      ) : (
        // Normal state
        <div>
          <label className="font-medium my-2">Add Item</label>
          <input
            type="text"
            name="items"
            className="w-full py-1 rounded-md px-2"
            value={userValue}
            onChange={(e) => setUserValue(e.target.value)}
          />
          <button
            className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md font-medium"
            type="submit"
          >
            Submit
          </button>
        </div>
      )}
    </form>
  );
}

export default AddItems;
