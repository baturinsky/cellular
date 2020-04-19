import GUI from "./GUI";

import { h, render } from "preact";

window.onload = () => {
  render(h(GUI, null), document.body);
};
