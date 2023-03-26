export function isInt(n) { return n % 1 === 0; }

export function toMinsPerKm(paceInMinsPerMile) {
  // paceInMinsPerMile is an array
  // if it takes 7:00 mins to cover one mile, how many minutes would it take to cover one kilometer at that same rate?
  // 1 mile = 1.609344 kilometers
  // 1 kilometer = 0.621371192 miles
  let [minutes, seconds] = paceInMinsPerMile;

  if (minutes !== 0) { minutes = (paceInMinsPerMile[0] * 0.621371192) };
  if (seconds !== 0) { seconds = (paceInMinsPerMile[1] * 0.621371192) };

  if (!isInt(minutes)) {
    const minsFraction = Number((minutes % 1).toFixed(1));
    // Why is minsFraction sometimes a string, sometimes a number?
    console.log('logging minsFraction from toMinsPerKm fn', typeof minsFraction, minsFraction);

    // If minsFraction is a string, can we rely on type coercion here?
    seconds += minsFraction * 60;
 
    minutes = Math.floor(minutes);
    seconds = Math.floor(seconds);

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
  }
  // Do we need to worry about hours?
  return [minutes, seconds]
}

export function displayTotalTime(timeArray) {
  const [hours, minutes, seconds] = timeArray;
  
  if (hours < 1) {
    return displayPace([minutes, seconds]);
  } else {
    const hoursToDisplay = hours < 10 ? `0${hours}` : `${hours}`;
    const minsDisplay = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secsDisplay = seconds < 10 ? `0${seconds}` : `${seconds}`;
    
    return `${hoursToDisplay}:${minsDisplay}:${secsDisplay}`;
  }
}

export function displayPace(pace) {
  const secsDisplay = pace[1] < 10 ? `0${pace[1]}` : `${pace[1]}`;
  const paceToDisplay = `${pace[0]}:${secsDisplay}`;

  return paceToDisplay;
}
// create func toMinsPerMile