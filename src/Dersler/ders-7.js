import { useRef, forwardRef } from "react";

// forwardRef function ile kulanılır  altta arrow function yapısı kullanılmıştır
const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

function Ders7() {
  const inputRef = useRef();
  const focusInput = () => {
    // console.log(inputRef.current.value) kontrol
    inputRef.current.focus();
  };

  const InputforwardRef = useRef();
  const forwardRefInput = () => {
    // console.log(InputforwardRef.current.value) kontrol
    InputforwardRef.current.focus();
  };
  return (
    <>
      <h1 className="text-3xl">useRef() - forwardRef()</h1>
      <p>
        forwardRef: form gönderim tipinde props gibi çalışırken diğeri dom
        içinde direk seçim yapar
      </p>
      <hr />
      <hr />
      <h1 className="text-2xl">useRef ile Focusla</h1>
      <input
        type="text"
        className=" m-1 p-1 bg-gray-400 text-white"
        ref={inputRef}
      />
      <button
        className="p-4 m-1 h-10 text-white flex items-center rounded bg-yellow-600 "
        onClick={focusInput}
      >
        useRef = Focusla
      </button>
      <hr />
      <hr />
      <h1 className="text-2xl">forwardRef ile Focusla</h1>
      <Input
        ref={InputforwardRef}
        type="text"
        className="m-1 p-1 bg-gray-400 border-solid text-white"
      />
      <button
        className="p-4 m-1 h-10 text-white flex items-center rounded bg-yellow-600"
        onClick={forwardRefInput}
      >
        forwardRef = Focusla
      </button>
    </>
  );
}

export default Ders7;
