import { React, ReactDOM, html } from "../deps.js";
import { PaceForm } from './PaceForm.js';


export const PaceCalcCard = ({ url, fetchNewRepo, index }) => {
  return html`
    <article 
      className="col-md-5 shadow p-5 mx-3 mb-4 rounded bg-white d-flex flex-column">
      <${PaceForm} />
    </article>
  `
}