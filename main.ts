/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-12-14
 * @fileOverview This program prints all integers between two numbers.
 */

// Hardcoded test values
const startA3: number = 5;
let endA3: number = 15; // must be greater than start

let outputA3: string = "";

for (let i = startA3; i <= endA3; i++) {
  outputA3 += i + " ";
}

console.log(outputA3.trim());
console.log("\nDone.");
