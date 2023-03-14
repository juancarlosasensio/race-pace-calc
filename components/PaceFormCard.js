import { React, ReactDOM, html } from "../deps.js";
import { ToggleDistUnits } from "./ToggleDistUnits.js";

export const PaceFormCard = ({ distUnit, setDistUnit, setPace }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const paceUnits = [];
    Array.from(event.target.querySelectorAll("select")).forEach(ele => {
      const {value} = ele;
      const [scalar,] = value.split(' ');
      paceUnits.push(parseInt(scalar))
    })

    setPace(paceUnits)
  }

  const renderSelectOptions = (loLimit, hiLimit, constant = '') => {
    const output = [];
    for (let i = loLimit; i <= hiLimit; i++) {
      const val = `${i} ${constant}`
      if (i === loLimit) {
        output.push(html`<option key=${val} defaultValue=${val}>${val}</option>`);
      } else {
        output.push(html`<option key=${val} value=${val}>${val}</option>`);
      }
    }

    return output;
  }

  return html`
    <article 
      className="col-md-5 shadow p-5 mx-3 mb-4 rounded bg-white d-flex flex-column">
      <form onSubmit=${handleSubmit}>
        <div className="row mb-3">
          <div className="col-6">
            <select className="form-select" aria-label="Minutes select" id="mins-select">
              ${renderSelectOptions(3, 30, 'min')}
            </select>
          </div>
          <div className="col-6">
            <select className="form-select" aria-label="Seconds select" id="secs-select">
              ${renderSelectOptions(0, 59, 'sec')}
            </select>
          </div>
        </div>
        <div className="col-4 mb-3">
          <button type="submit" className="btn btn-primary w-100">Set Pace</button>
        </div>
      </form>
      <${ToggleDistUnits} 
        distUnit=${distUnit} 
        setDistUnit=${setDistUnit} 
      />
    </article>
  `
}