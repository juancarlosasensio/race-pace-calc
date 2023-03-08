import { React, ReactDOM, html } from "../deps.js";
import { PaceFormCard } from '../components/PaceFormCard.js'
import { PacesTable } from '../components/PacesTable.js'

export const PaceCalculator = () => {
  const [pace, setPace] = React.useState([]);
  const [distUnit, setDistUnit] = React.useState('miles');

  return html`
    <section className="container">
      <div className="row justify-content-around">
        <${PaceFormCard} 
          pace=${pace} 
          setPace=${setPace}
          distUnit=${distUnit}
          setDistUnit=${setDistUnit}
        />
        <${PacesTable} pace=${pace} distUnit=${distUnit} />
      </div>
    </section>
  `
}