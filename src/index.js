import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";

import Header from "./header";
import "./styles.css";

function App() {
  return (
    <div className="rootpage">
      <Header />
      <div className={"leftRegion"} />
      <div className={"rightRegion"} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
