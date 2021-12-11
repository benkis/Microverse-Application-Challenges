'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(n, str) {
    let valleyCounter = 0; // To count the valleys
    let altitude = 0; // To increment altitude in every "U" char, otherwise decrement the altitude

    // To go through every char in the string
    for (let i = 0; i < n; i++) {
        let char = str.charAt(i); // To get a char in every cycle

        // Because we are just interested "U" char
        if (char === "U") { // check if the current char in the cycle is equal to "U"

            altitude++; // Increment the altitude if the char is "U"

            if (altitude === 0) { // This is the "key" when altitude is equal to 0 means that 1 valley was completed
                valleyCounter++; // Means that a valley was completed an increment
            }

        } else { // If is other char that not is "U" 
            altitude--; // then the altitude will be decremented
        }
    }

    // Finally when for cycle ends, return the valleyCounter
    return valleyCounter;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}