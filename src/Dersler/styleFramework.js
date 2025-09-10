import { Title } from "./styled-components";
import Boostrap from "./Bootstrap";
import "../tailwind.css";
import Tailwind from "./tailwind";
function Style() {
  return (
    <>
      <Title>App</Title>
      <Title theme="dark">app2</Title>

      <Boostrap name="kutsi" Department="Bilişim" Salary="4000" />
      <Tailwind />
    </>
  );
}
export default Style;
