import { React, ReactDOM, html } from "../deps.js";

export const ToggleDistUnits = ({ distUnit, setDistUnit }) => {
  const handleOnChange = (event) => {
    setDistUnit(event.target.getAttribute("id"))
  }
  
  return html`
    <div className="row mb-3">
      <h6>Set distance units</h6>
      <div className="col-6">
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="units" 
            id="kms" 
            defaultChecked=${distUnit === 'kms'}
            onChange=${handleOnChange} />
          <label className="form-check-label" htmlFor="kms">
            min / km
          </label>
        </div>
      </div>
      <div className="col-6">
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="units" 
            id="miles" 
            defaultChecked=${distUnit === 'miles'} 
            onChange=${handleOnChange}
          />
          <label className="form-check-label" htmlFor="miles">
            min / mi
          </label>
        </div>
      </div>
    </div>
  `
}        