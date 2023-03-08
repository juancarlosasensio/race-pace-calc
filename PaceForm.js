import { React, ReactDOM, html } from "./deps.js";

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
        <div className="d-flex justify-content-between mb-3">
          <div className="flex-fill">
            <select className="form-select" aria-label="Minutes select">
              ${renderSelectOptions(3, 30, 'min')}
            </select>
            <select className="form-select" aria-label="Seconds select">
              ${renderSelectOptions(0, 59, 'sec')}
            </select>
          </div>
          <div className="flex-grow-1">
            <button type="submit" className="btn btn-primary w-100">Set Pace</button>
          </div>
        </div>
      </form>
    `
}