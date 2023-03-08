import { React, ReactDOM, html } from "../deps.js";
import { PaceCalcCard } from '../components/PaceCalcCard.js'
import { PacesTable } from '../components/PacesTable.js'

export const PaceCalculator = () => {
  return html`
    <section className="container">
      <div className="row justify-content-around">
        <${PaceCalcCard} />
        <${PacesTable} />
      </div>
    </section>
  `
}