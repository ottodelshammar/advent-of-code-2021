import fs from 'fs'

export const inputDataLinesIntegers = (filename = "input.txt") => {
    return fs.readFileSync(filename).toString().trim().split(",").map(e => parseInt(e));
};

export const getSolutionPart1 = () => {
    const fish = inputDataLinesIntegers();
    const days = 80;
    const intialCycles = [0, 0];
    const cycles = [0, 0, 0, 0, 0, 0, 0];
    var firstCycle = 0;
    var firstInitialCycle = 0;
    fish.forEach(f => cycles[f]++)
    for (let day = 0; day < days; day++) {
        firstCycle = cycles.shift();
        firstInitialCycle = intialCycles.shift();
        cycles.push(firstCycle + firstInitialCycle);
        intialCycles.push(firstCycle);
    }
    return cycles.concat(intialCycles).reduce((a, b) => a + b, 0)
};

export const getSolutionPart2 = () => {
    const fish = inputDataLinesIntegers();
    const days = 256;
    const intialCycles = [0, 0];
    const cycles = [0, 0, 0, 0, 0, 0, 0];
    var firstCycle = 0;
    var firstInitialCycle = 0;
    fish.forEach(f => cycles[f]++)
    for (let day = 0; day < days; day++) {
        firstCycle = cycles.shift();
        firstInitialCycle = intialCycles.shift();
        cycles.push(firstCycle + firstInitialCycle);
        intialCycles.push(firstCycle)
    }
    return cycles.concat(intialCycles).reduce((a, b) => a + b, 0)
};

console.log("Javascript")
const part = process.env.part || "part2"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())
