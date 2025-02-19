import { h } from "../src/core/createElement.js";
import { render } from "../src/core/render.js";

const vApp = h("div", { id: "app" }, 
    h("h1", null, "Hello, Custom React!"),
    h("p", null, "This is a simple React-like library.")
  );
  
  const root = document.getElementById("root");
  render(vApp, root);

  //Just a basic structure one may update it as per thier level of udnerstandning!!