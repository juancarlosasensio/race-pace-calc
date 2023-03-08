import { React, ReactDOM, html } from "../deps.js";

export const PaceForm = ({ }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(event.target)
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
    <form onSubmit=${handleSubmit}>
      <div className="row mb-3">
        <div className="col-6">
          <select className="form-select" aria-label="Minutes select">
            ${renderSelectOptions(3, 30, 'min')}
          </select>
        </div>
        <div className="col-6">
          <select className="form-select" aria-label="Seconds select">
            ${renderSelectOptions(0, 59, 'sec')}
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-6">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              min / km
            </label>
          </div>
        </div>
        <div className="col-6">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              min / mi
            </label>
          </div>
        </div>
      </div>
      <div className="">
        <button type="submit" className="btn btn-primary w-100">Set Pace</button>
      </div>
    </form>
  `
}