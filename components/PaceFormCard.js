import { React, ReactDOM, html } from "../deps.js";
import { ToggleDistUnits } from "./ToggleDistUnits.js";

export const PaceFormCard = ({ distUnit, setDistUnit, setPace, pace }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const paceUnits = [];
    Array.from(event.target.querySelectorAll("select")).forEach(ele => {
      const { value } = ele;
      const [scalar,] = value.split(' ');
      paceUnits.push(parseInt(scalar));
    })
    setPace(paceUnits)
  }

  const renderSelectOptions = (loLimit, hiLimit, timeUnit = '') => {
    const output = []    
    if (timeUnit == 'min') {
        output.push(html`<option key=${'adfadfad'} defaultValue=${pace[0]}>${pace[0]}min</option>`);
      } else if (timeUnit == 'sec') {
        output.push(html`<option key=${'addardardha'} defaultValue=${pace[1]}>${pace[1]}sec</option>`);  
    }
    
    for (let i = loLimit; i <= hiLimit; i++) {
      const val = `${i} ${timeUnit}`
        output.push(html`<option key=${val} value=${val}>${val}</option>`);
      } 

    return output;
  }

  return html`
    <article 
      className="col-md-3 shadow p-3 mx-3 mb-4 rounded bg-white d-flex flex-column align-self-start">
      <form onSubmit=${handleSubmit}>
        <div className="row mb-3">
          <div className="col-6 mt-2">
            <select className="form-select" aria-label="Minutes select" id="mins-select">
              ${renderSelectOptions(3, 30, 'min')}
            </select>
          </div>
          <div className="col-6 mt-2">
            <select className="form-select" aria-label="Seconds select" id="secs-select">
              ${renderSelectOptions(0, 59, 'sec')}
            </select>
          </div>
        </div>
        <div className="col-6 mb-3">
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