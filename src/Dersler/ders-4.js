import React, { createElement } from "react";
import "../tailwind.css";
import Style from "./styleFramework";

function Ders() {
  const todos = ["todo1", "todo2", "todo3"];
  function Button(props) {
    return (
      <button className="bg-gray-600 p-1 hover:bg-red-500 active:bg-purple-500 text-white ">
        {props.text}
      </button>
    );
  }
  /* 
  const ul = createElement(
    "ul",
    null
    ,todos.map((todo) =>
      createElement("li", { className: "text-red-500" }, todo)
    )
  );
  const button = createElement(Button, { text: "button text" }, null);
  return createElement(
    "main",
    {
      className: "test",
      id: "main",
    },
    ul,
    button
  ); 
  boostrap de çalışmayan yapı tailwindcss de çalıştı gibi
  jsx yapısı olmasydı react böyle yazılırdı
  */

  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>
        Yerel css Örnek
      </h1>
      <label htmlFor="search" tabIndex={2}>
        Arama
      </label>
      {/* 
       for id ile eşleşip onun üstüne tıklandığında eşleşen öğeye yolluyor.
       tabIndex tab'a basılınca gidilecek öğeyi sıralar  
        */}
      <input
        type="text"
        id="search"
        className="bg-gray-400 "
        style={{ borderRadius: "5px" }}
      />{" "}
      <Button text="Merhaba button" />
      <ul className="w-60">
        {todos.map((todo, id) => {
          return (
            <li
              key={id}
              className="bg-orange-300 m-1 p-1 border-solid border-5 border-pink-700"
            >
              {todo}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Ders;
