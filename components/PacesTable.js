import { React, ReactDOM, html } from "../deps.js";
import { POPULAR_RACE_DIST_IN_MILES } from "../constants.js";

export const PacesTable = ({ pace, distUnit }) => {
  console.log('from PacesTable', pace)
  const minsDisplay = pace[0] < 10 ? `0${pace[0]}` : `${pace[0]}`;
  const secsDisplay = pace[1] < 10 ? `0${pace[1]}` : `${pace[1]}`;
  const paceToDisplay = `${minsDisplay}:${secsDisplay}`;
  
  function isInt(n) {
    return n % 1 === 0;
  }
  // Returns an array with [hours, minutes, seconds]
  const calcTimeForDistAndPace = (miles, pace) => {
    let seconds = miles.toFixed(2) * pace[1];
    let minutes = miles.toFixed(2) * pace[0];
    let hours = 0;
    
    if (!isInt(seconds)) {
      seconds = Math.floor(seconds);
    }
    if (!isInt(minutes)) {
      const decimals = (minutes % 1).toFixed(1);
      seconds += decimals * 60;
      minutes = Math.floor(minutes);
    }

    while (seconds > 59) {
      if (seconds == 60) {
        minutes++;
        seconds = 0;
        break;
      } else if ((seconds - 60 > 0)) {
        seconds -= 60;
        minutes++;
      }
    }

    while (minutes > 59) {
      if (minutes == 60) {
        hours++;
        minutes = 0;
        break;
      } else if ((minutes - 60 > 0)) {
        minutes -= 60;
        hours++
      }
    }

    return [hours, minutes, seconds]
  }

  const displayTotalTime = (timeArray) => {
    const [hours, minutes, seconds] = timeArray;
    const minsDisplay = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secsDisplay = seconds < 10 ? `0${seconds}` : `${seconds}`;
    
    let timeDisplayStr = '';
    if (hours < 1) {
      timeDisplayStr = `${minutes} : ${seconds}`
      return `${minsDisplay}:${secsDisplay}`;
    } else {
      const hoursToDisplay = hours < 10 ? `0${hours}` : `${hours}`;
      return `${hoursToDisplay}:${minsDisplay}:${secsDisplay}`;
    }
  }

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
            ${displayTotalTime(calcTimeForDistAndPace(i, pace))}
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
            ${displayTotalTime(calcTimeForDistAndPace(currSpecialRace.dist, pace))}
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
            <th className="text-end">${pace}<abbr title="minutes per ${distUnit}">${distUnit === 'miles' ? '/mi' : '/km'}</abbr></th>
          </tr>
        </thead>
        <tbody>
          ${renderTableBody()}
        </tbody>
       </table>
    </div>
  `
}
