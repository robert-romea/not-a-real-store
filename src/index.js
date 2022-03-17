import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


// deploy stuffs

// scripts: 
// "predeploy": "npm run build",
//     "deploy": "gh-pages -d build",
//"homepage": "https://robert-romea.github.io/not-a-real-store",
