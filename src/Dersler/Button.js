import React from "react";
import "../tailwind.css";
import classNames from "classnames";
function Button({ text, variant = "default" }) {
  const btnColor = ["danger", "succes", "warning"];

  // includes metodu array içinde arama yapar ve true false döner
  if (btnColor.includes(variant) == false) {
    variant = "default";
  }
  return (
    <>
      <button
        className={classNames({
          "p-4 m-1 h-10 text-white flex items-center rounded": true,

          "bg-gray-700": variant === "default",
          "bg-red-600": variant === "danger",
          "bg-green-600": variant === "succes",
          "bg-yellow-600": variant === "warning",
        })}
      >
        {text}
      </button>
    </>
  );
}
export default Button;
