import fs from 'fs'

export const inputDataLinesIntegers = (filename = "input.txt") => {
    return fs.readFileSync(filename).toString().trim().split(",").map(e => parseInt(e));
};

export const getSolutionPart1 = () => {
    const fish = inputDataLinesIntegers();
    const days = 80;
    for (let i = 0; i < days; i++) {
        const length = fish.length;
        for (let j = 0; j < length; j++) {
            if (fish[j] == 0) {
                fish[j] = 6;
                fish.push(8)
            } else {
                fish[j] -= 1;
            }
        }
    }
    return fish.length;
};

export const getSolutionPart2 = () => {
    const fish = inputDataLinesIntegers();
    const days = 256;
    for (let i = 0; i < days; i++) {
        console.log(fish)
        fish.forEach((f,i) => { f-1
            if (f == 0) {
                fish.push(8)
                fish[i] = 6;
            } else {
                fish[i]-=1;
            }
        }
        );
    }
    return fish.length;
};

console.log("Javascript")
const part = process.env.part || "part2"

if (part === "part1")
    console.log(getSolutionPart1())
else
    console.log(getSolutionPart2())
