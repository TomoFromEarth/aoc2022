import { readFileSync } from "fs";

// convert .txt file to array of strings
const getElves = readFileSync("./day01/input.txt", "utf-8").split(/\r?\n\n/);

// convert string array into array of integer groups and reduce to single integer
const getTotalCalories = getElves.map((elf) => {
  let calories = elf.split(/\n/).map((elf) => parseInt(elf, 10));

  let totalCalories = calories.reduce((acc, cur) => acc + cur, 0);
  return totalCalories;
});

// get biggest bag of calories
console.log(getTotalCalories.sort((a, b) => b - a)[0]);

// get top three bags o calories average
const topThreeElves = getTotalCalories.sort((a, b) => b - a);
topThreeElves.splice(3);
console.log(topThreeElves.reduce((a, b) => a + b, 0));
