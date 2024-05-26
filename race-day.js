/* register runners for the race and give them instructions on race day */

// Early adults receive a race number at or above 1000
// All others receive a number below 1000
let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegistered = true;
const runnerAge = 18;
//Early adults run at 9:30 am.
if (runnerAge > 18 && earlyRegistered === true){
  console.log(`The race will start at 9:30am. Here is your race number ${raceNumber}`) }
// Late adults run at 11:00 am
else if (runnerAge > 18 && earlyRegistered === false) {
    console.log(`The race will start at 11:00am. Here is your race number ${raceNumber}`)
}
// Youth registrants run at 12:30 pm (regardless of registration)
else if (runnerAge < 18 ) {
    console.log(`The race will start at 12:30pm. Here is your race number ${raceNumber}`)
}
// Runners that are exactly 18 years old should be told to see the registration desk.
else{
  console.log("Please visit the registration desk.")
}
