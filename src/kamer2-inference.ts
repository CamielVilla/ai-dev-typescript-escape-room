// 🎮 KAMER 2: Type Inference
// Remove redundant types and add missing ones where needed.

// TODO: This variable has a redundant explicit type annotation
let gameTitle: string = "Elden Ring";

// TODO: This variable is missing a required type annotation
let playerName = "Tarnished";

// TODO: Callback parameter is missing a type annotation
function processScores(scores: number[], callback) {
  return scores.map(callback);
}

// TODO: Function parameter missing type annotation
function calculate(a: number, b) {
  return a + b;
}

// TODO: This function signature is complete - find and remove the redundant type annotation
function getPlatform(game: string): string {
  if (game === "Mario") return "Nintendo";
  if (game === "Halo") return "Xbox";
  return "Unknown";
}

// These should work once fixed
let scores: number[] = [92, 88, 95, 87];
let games = ["Zelda", "Mario", "Metroid"];

const average = calculate(88, 92);
const doubledScores = processScores(scores, (s: number) => s * 2);
const platform = getPlatform("Mario");

console.log(`\n🎮 Room 2: Score ${average}, Platform: ${platform}`);
console.log(`Doubled scores: ${doubledScores.join(", ")}`);
console.log(`Player: ${playerName}, Game: ${gameTitle}`);
console.log(`Games: ${games.join(", ")}`);

// Compute room code from the fixed data
export const roomCode = [
  String.fromCharCode(gameTitle.length + 73),
  String.fromCharCode(playerName.charCodeAt(0) - 19),
  String.fromCharCode(scores.length + 66),
  String.fromCharCode(games.length + 66),
].join("");
