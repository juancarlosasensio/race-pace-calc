import { React, ReactDOM, html } from "../deps.js";
import { PaceFormCard } from '../components/PaceFormCard.js'
import { PacesTable } from '../components/PacesTable.js'

export const PaceCalculator = () => {
  const [pace, setPace] = React.useState([]);

  return html`
    <section className="container">
      <div className="row justify-content-around">
        <${PaceFormCard} />
        <${PacesTable} />
      </div>
    </section>
  `
}