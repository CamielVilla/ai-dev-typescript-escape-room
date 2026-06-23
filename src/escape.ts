// TypeScript Escaperoom - Main Escape Script
// Import all room codes and combine them for the final escape code!

import { roomCode as k1 } from "./kamer1-basics";
import { roomCode as k2 } from "./kamer2-inference";
import { roomCode as k3 } from "./kamer3-interfaces";
import { roomCode as k4 } from "./kamer4-optionals";
import { roomCode as k5 } from "./kamer5-unions";
import { roomCode as k6 } from "./kamer6-aliases";
import { roomCode as k7 } from "./kamer7-functies";
import { roomCode as k8 } from "./kamer8-boss";

// Combine all room codes
const escapeCode = [k1, k2, k3, k4, k5, k6, k7, k8].join("-");

console.log("\n" + "=".repeat(60));
console.log("  CONGRATULATIONS! YOU ESCAPED THE TYPESCRIPT ESCAPEROOM!");
console.log("=".repeat(60));
console.log("\n  Your final escape code:\n");
console.log("  " + escapeCode);
console.log("\n  Show this code to your teacher to prove you escaped!");
console.log("\n" + "=".repeat(60) + "\n");

export { escapeCode };
