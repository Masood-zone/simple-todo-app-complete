import React, { useState } from "react";
import ItemsList from "./ItemsList";
import AddItems from "./AddItems";

function Container() {
  const [todoList, setTodoList] = useState([
    { id: 1, task: "Swimming" },
    { id: 2, task: "Go to laundry" },
    { id: 3, task: "Go for lectures" },
  ]);
  const [userValue, setUserValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [edit, setEdit] = useState(false);

  //   For submission
  function handleSubmit(e) {
    e.preventDefault();
    if (selectedItem) {
      setTodoList((prevTodo) =>
        prevTodo.map((todo) =>
          todo.id === selectedItem.id ? { ...todo, task: userValue } : todo
        )
      );
      setSelectedItem(null);
      setEdit(false);
    } else {
      const item = {
        id: Math.floor(Math.random() * 101),
        task: userValue,
      };
      setTodoList([...todoList, item]);
    }
    setUserValue("");
  }
  // For removing an item from the list
  function handleDelete(id) {
    console.log(id);
    const item = todoList.filter((itemId) => itemId.id !== id);
    setTodoList(item);
  }
  //   For updating the item on the list
  function handleUpdate(item) {
    setSelectedItem(item);
    setUserValue(item.task);
  }

  return (
    <div className="flex justify-between items-center mt-7">
      <AddItems
        userValue={userValue}
        setUserValue={setUserValue}
        handleSubmit={handleSubmit}
        edit={edit}
      />
      <ItemsList
        todoList={todoList}
        handleDelete={handleDelete}
        edit={edit}
        setEdit={setEdit}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default Container;
