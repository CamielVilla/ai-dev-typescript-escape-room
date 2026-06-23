// 🔐 KAMER 1: Basic Types
// Fix all the type errors to get the escape code.

// TODO: These variables have wrong type annotations
let filmTitle: number = "The Matrix";
let releaseYear: string = 1999;
let isClassic: string = true;
let scores: string[] = [8.7, 9.0, 8.5];

// TODO: This array has the wrong element types
let cast: number[] = ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"];

// TODO: This function has incorrect parameter and return types
function calculateAverage(numbers: string[]): string {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total / numbers.length;
}

// TODO: This function needs an explicit return type annotation
function printFilmInfo(title: string, year: number, rating: number) {
  console.log(`${title} (${year}) - Rating: ${rating}`);
}

// These calls should work after fixing:
const average = calculateAverage(scores);
printFilmInfo(filmTitle, releaseYear, average);

console.log(`\n🎬 Room 1: ${filmTitle} has cast: ${cast.join(", ")}`);
console.log(`Is Classic: ${isClassic}`);

// Compute room code from the fixed data
export const roomCode = [
  String.fromCharCode(filmTitle.length + 74),
  String.fromCharCode(releaseYear - 1910),
  String.fromCharCode(scores.length + 77),
  String.fromCharCode(cast.length + 66),
].join("");
