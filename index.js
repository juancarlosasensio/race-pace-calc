import { React, ReactDOM, html } from "./deps.js";
import { Header } from "./components/Header.js";
import { PaceCalculator } from "./containers/PaceCalculator.js";

const App = () => {
  return html`
    <div className="container vh-100 d-flex flex-column">
      <${Header} />
      <${PaceCalculator} />  
    </div>  
    `;
}

ReactDOM.render(
  html`<${App} foo=${"bar"} />`,
  document.getElementById("root")
);
