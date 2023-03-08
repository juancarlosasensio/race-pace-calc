 import { React, ReactDOM, html } from "../deps.js";


// type="radio"
//                 name="site_name"
//                 value={result.SITE_NAME}
//                 checked={this.state.site === result.SITE_NAME}
//                 onChange={this.onSiteChanged}

export const ToggleDistUnits = () => {

  return html`
    <div className="row mb-3">
      <h6>Set distance units</h6>
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
  `
}        