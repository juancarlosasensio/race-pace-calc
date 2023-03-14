import { React, ReactDOM, html } from "../deps.js";
import { POPULAR_RACE_DIST_IN_MILES } from "../constants.js";

export const PacesTable = ({ pace, distUnit }) => {
  console.log('from PacesTable', pace)
  const minsDisplay = pace[0] < 10 ? `0${pace[0]}` : `${pace[0]}`;
  const secsDisplay = pace[1] < 10 ? `0${pace[1]}` : `${pace[1]}`;
  const paceToDisplay = `${minsDisplay}:${secsDisplay}`
  
  const localPace = "04:30";
  /*
    If one of the popular race distances is between i and i + 1, insert it there. 
    Otherwise, move on
  */
  const renderTableBody = () => {
    let indexPopRaceDist = 0;
    const output = [];

    for (let i = 1; i <= 30; i++) {
      const currSpecialRace = POPULAR_RACE_DIST_IN_MILES[indexPopRaceDist];
      output.push(html`
          <tr className="" key=${i}>
            <td className="text-start">
            ${i}
            </td>
            <td className="text-end">
            ${localPace}
            </td>
          </tr>
        `)
      if ((i < currSpecialRace.dist && currSpecialRace.dist < i + 1) && (indexPopRaceDist < POPULAR_RACE_DIST_IN_MILES.length - 1)) {
        output.push(html`
          <tr className="bg-dark fw-bold text-white" key=${currSpecialRace.dist}>
            <td className="text-start">
            ${currSpecialRace.name}
            </td>
            <td className="text-end">
            ${localPace}
            </td>
          </tr>
        `)
        indexPopRaceDist++
      }
    }
    return output;  
  }

  return html`
    <div className="col-md-5 text-center">
      <p>${paceToDisplay}</p>
       <table className="table">
        <thead>
          <tr>
            <th className="text-start">Dist (${distUnit})</th>
            <th className="text-end">${localPace}<abbr title="minutes per ${distUnit}">${distUnit === 'miles' ? '/mi' : '/km'}</abbr></th>
          </tr>
        </thead>
        <tbody>
          ${renderTableBody()}
        </tbody>
       </table>
    </div>
  `
}
