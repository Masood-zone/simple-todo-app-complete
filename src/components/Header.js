import React from "react";

function Header() {
  const todoTitle = "Fai's Todo App";
  const notes = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nemo
  dolor rerum sequi incidunt bland itiis repellendus perferendis
  reiciendis itaque eaque eligendi beatae corporis possimus explicabo,
  natus ipsa. Adipisci, sed ipsam?`;

  return (
    <div className="max-w-full h-max py-5 px-3 bg-white m-auto mt-10 rounded-md">
      <h1 className="text-center text-4xl font-medium py-4">{todoTitle}</h1>
      <p>{notes}</p>
    </div>
  );
}

export default Header;
