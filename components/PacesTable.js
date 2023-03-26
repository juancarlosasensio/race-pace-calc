import { React, ReactDOM, PropTypes, html } from "../deps.js";
import { POPULAR_RACE_DISTANCES } from "../constants.js";
import { 
  toMinsPerKm,
  displayPace, 
  displayTotalTime, 
  calcTimeForDistAndPace,
  toMinsPerMile
} from "../utils/pace.js";

const PacesTable = ({ pace, distUnit }) => {
  /*
    If one of the popular race distances is between i and i + 1, insert it there. 
    Otherwise, move on
  */
  const renderTableBody = () => {
    let raceIndex = 0;
    let distanceLimit = 31;
    const output = [];

    if (distUnit === 'kms') {
      distanceLimit = 50;
    }

    for (let dist = 1; dist <= distanceLimit; dist++) {
      const currSpecialRace = POPULAR_RACE_DISTANCES[raceIndex];
      const specialRaceDist = currSpecialRace[distUnit];
      const specialRaceName = currSpecialRace.name;

      if (distUnit === 'kms') {
        if (dist === specialRaceDist) {
          output.push(html`
            <tr className="bg-dark fw-bold text-white" key=${specialRaceDist}>
              <td className="text-start">
              ${specialRaceName}
              </td>
              <td className="text-end">
              ${displayTotalTime(calcTimeForDistAndPace(specialRaceDist, pace))}
              </td>
            </tr>
          `)
          raceIndex++;
        } else {
          output.push(html`
              <tr className="" key=${dist}>
                <td className="text-start">
                ${dist}
                </td>
                <td className="text-end">
                ${displayTotalTime(calcTimeForDistAndPace(dist, pace))}
                </td>
              </tr>
          `)
        }
      } else if (distUnit === 'miles') {
        output.push(html`
          <tr className="" key=${dist}>
            <td className="text-start">
            ${dist}
            </td>
            <td className="text-end">
            ${displayTotalTime(calcTimeForDistAndPace(dist, pace))}
            </td>
          </tr>
        `)

        if ((dist < specialRaceDist && specialRaceDist < dist + 1) && (raceIndex < POPULAR_RACE_DISTANCES.length)) {
          output.push(html`
            <tr className="bg-dark fw-bold text-white" key=${specialRaceDist}>
              <td className="text-start">
              ${specialRaceName}
              </td>
              <td className="text-end">
              ${displayTotalTime(calcTimeForDistAndPace(specialRaceDist, pace))}
              </td>
            </tr>
          `)
          raceIndex++
        }
      }
    }
    return output;  
  }

  const convertedPace = distUnit === 'miles' ? toMinsPerKm(pace) : toMinsPerMile(pace)

  return html`
    <div className="col-md-7 text-center">
       <table className="table">
        <thead>
          <tr>
            <th className="text-start">Dist (${distUnit})</th>
            <th 
              className="text-end">
                ${displayPace(pace)}
                <abbr title="minutes per ${distUnit}">${distUnit === 'miles' ? '/mi' : '/km'}</abbr>
                (${displayPace(convertedPace)}${distUnit === 'miles' ? '/km' : '/mi'})
            </th>
          </tr>
        </thead>
        <tbody>
          ${renderTableBody()}
        </tbody>
       </table>
    </div>
  `
}

PacesTable.propTypes = {
  pace: PropTypes.arrayOf(PropTypes.number),
};

export default PacesTable;
