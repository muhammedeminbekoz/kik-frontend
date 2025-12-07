import { createElement } from "react";
import Tailwind from "./Tailwind";
import "./index.css";
import Button from "./components/Button";

function App() {
  const h1 = createElement("h1", { className: "text-2xl font-bold" }, "Hello World");

  return (
    <div>
      <h1 style={{ color: "white", backgroundColor: "black" }}>Hello World</h1>
      <Tailwind />
      {h1}
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        placeholder="search..."
        onClick={() => {
          alert("clicked");
        }}
      />

      <div style={{ padding: "2rem" }}>
        <Button variant="default">Bu bir buton</Button>
        <Button variant="warning">Bu bir buton</Button>
        <Button variant="danger">Bu bir buton</Button>
        <Button variant="success">Bu bir buton</Button>
      </div>
    </div>
  );
}

export default App;
