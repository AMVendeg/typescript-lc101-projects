// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type
let spacecraftName: string = 'Edurance';
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;


// Part 2: Print Days to Mars
let milesToMars: number = kilometersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars / speedMph;
let daysToMars: number = hoursToMars / 24;

// Part 3: Create a Function ("getDaysToLocation")
export function getDaysToLocation(kilometersAway: number): number {
  let milesAway: number = kilometersAway * milesPerKilometer;
  let hoursToLocation: number = milesAway / speedMph;
  let daysToLocation: number = hoursToLocation / 24;
  return Math.round(daysToLocation * 100) / 100;
}
