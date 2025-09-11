import { useEffect, useState } from "react";
import "../tailwind.css";
import Ders6 from "./ders-6";
function Test() {
  const [show, setShow] = useState(false);

  
  return (
    <>
      <button
        onClick={() => {
          setShow((show) => !show);
        }}
        className="bg-green-300 rounded p-1 text-white m-1"
      >
        {show ? "gizle" : "göster"}
      </button>
      {show && <Ders6 />}
    </>
  );
}

export default Test;
