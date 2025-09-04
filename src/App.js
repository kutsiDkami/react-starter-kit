import React from "react";
import { Title } from "./components/styled-components";
import Boostrap from "./components/Bootstrap";
import "./tailwind.css";
import Tailwind from "./components/tailwind";

function App() {
  console.log(Title);
  return (
    <>
      <Title>App</Title>
      <Title theme="dark">app2</Title>

      <Boostrap name="kutsi" Department="Bilişim" Salary="4000" />
      <Tailwind />
    </>
  );
}

export default App;
