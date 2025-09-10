import React from "react";
import "../tailwind.css";
import Button from "./Button";
import Tab from "./Tab";

function App() {
  return (
    <>
      <div style={{ padding: 20 }}>
        <Tab activeTab={0}>
          <Tab.Panel Title="Home">1</Tab.Panel>
          <Tab.Panel Title="Hakkımızda">2</Tab.Panel>
          <Tab.Panel Title="Call">3</Tab.Panel>
        </Tab>
      </div>

      <Button text="deneme" variant="danger" />
      <Button text="deneme" variant="succes" />
      <Button text="deneme" variant="warning" />
      <Button text="deneme" />
      <Button text="deneme" variant="" />
    </>
  );
}

export default App;
