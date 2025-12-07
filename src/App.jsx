import { createElement } from "react";
import Tailwind from "./Tailwind";
import "./index.css";

function App() {
  const h1 = createElement("h1", { className: "text-2xl font-bold" }, "Hello World");

  return (
    <>
      <h1 style={{ color: "white", backgroundColor: "black" }}>Hello World</h1>
      <Tailwind />
      {h1}
    </>
  );
}

export default App;
