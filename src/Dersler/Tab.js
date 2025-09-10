import classNames from "classnames";
import { useState, useEffect, use } from "react";
function Tab({ children, activeTab }) {
  // console.log(children);
  //  gelen veriyi kontrol amaçlı

  const [active, setActive] = useState(activeTab);

  useEffect(() => {
    if (active === 3) {
      setActive(0);
    }
  }, [active]);

  return (
    <>
      <button
        className="
        bg-slate-500 text-white rounded m-1 p-1
        active:bg-red-500 hover:bg-green-500
        "
        onClick={() => setActive(active + 1)}
      >
        Change
      </button>
      <nav>
        {children.map((tab, index) => {
          // console.log(tab.props.title)
          return (
            <button
              key={index}
              className={active === index ? " bg-red-600  " : " bg-red-400  "}
              style={{
                marginRight: "5px",
                padding: "5px",
                color: "white",
                borderRadius: "5px",
              }}
              onClick={() => setActive(index)}

              /* 
              className 1 kare kulandığım için dufault değerleri veremedim bu noktada yerel css kullandım ama bunda da tailwindcss nasıl kullanırım bilemedim 
            */
            >
              {tab.props.Title}
            </button>
          );
        })}
      </nav>
      {children[active]}
    </>
  );
}

Tab.Panel = function ({ children, Title }) {
  //   console.log(children);
  return (
    <>
      <div>{children}</div>
    </>
  );
};
export default Tab;
