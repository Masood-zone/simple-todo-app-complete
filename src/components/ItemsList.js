import React from "react";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

function ItemsList({ todoList, handleDelete, setEdit, handleUpdate, edit }) {
  return (
    <div>
      <h1 className="font-medium py-2">Items List</h1>
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className="px-2 py-2 bg-white rounded-md border-2 border-gray-500 mt-1 flex items-center justify-between gap-6"
          >
            {todo.task}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  handleUpdate(todo);
                  setEdit(!edit);
                }}
              >
                <MdModeEdit />
              </button>
              <button onClick={() => handleDelete(todo.id)}>
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
