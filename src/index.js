import React from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";

import "./styles.css";

function App() {
  return (
    <div className="rootpage">
      <Typography variant="h4" gutterBottom>
        Safeer Chonengal
      </Typography>
      <Typography variant="h5" gutterBottom>
        About me
      </Typography>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
