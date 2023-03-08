 import { React, ReactDOM, html } from "./deps.js";
 
export const Header = () => {
  return html`
    <header className="text-md-center my-5 px-4">
      <h1 className="center font-weight-bolder mt-4 mb-3">
        Running Pace Calculator
      </h1>
      <h5 className="mb-0">
        Calculate your finish time for popular race distances (5k, 10k, 10 mile, Half Marathon, Marathon) based on your expected pace.
      </h5>
    </header>
  `
}