import React from "react";
import ReactDOM from "react-dom/client";
import Wrapper from "./hooks/wrapper/index.jsx";
import Root from "./root/index.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Wrapper>
      <Root />
    </Wrapper>
  </React.StrictMode>
);
