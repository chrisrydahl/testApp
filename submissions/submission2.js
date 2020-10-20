'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the lilysHomework function below.
function lilysHomework(arr) {
     if (arr.length === 1) return 0;  
  
  let n = arr.length;
  let indexMap = new Map();

  let ascArrClone = [...arr];
  let ascPassSwaps = 0;

  let descPassSwaps = 0;
  let descArrClone = [...arr];

  let sortedArrClone = [...arr];
  sortedArrClone.sort((a, b) => a - b);

  // Fill map w/ [value, [ascArrIndex, descArrIndex]] pairs of unsorted arr
  for (let i = 0; i < n; i++) {
    indexMap.set(arr[i], [i, i]);
  }

  // Run ASC comparison pass && keep track of swaps
  for (let j = 0; j < n; j++) {
    if (sortedArrClone[j] != ascArrClone[j]) {
      let swapValueIndex = indexMap.get(sortedArrClone[j])[0];

      indexMap.set(ascArrClone[j], 
      [swapValueIndex, indexMap.get(ascArrClone[j])[1]]);

      indexMap.set(ascArrClone[swapValueIndex], 
      [j, indexMap.get(ascArrClone[swapValueIndex])[1]]);

      ascPassSwaps++;

      [
        ascArrClone[j], ascArrClone[swapValueIndex]
        ] = [
        ascArrClone[swapValueIndex], ascArrClone[j]
      ];
    }
  }

  // Run DESC comparison pass && keep track of swaps
  for (let k = 0; k < n; k++) {
    if (sortedArrClone[n - 1 - k] != descArrClone[k]) {
      let swapValueIndex = indexMap.get(sortedArrClone[n - 1 - k])[1];

      indexMap.set(descArrClone[k], 
      [indexMap.get(descArrClone[k])[0], swapValueIndex]);

      indexMap.set(descArrClone[swapValueIndex], 
      [indexMap.get(descArrClone[swapValueIndex])[0], k]);

      descPassSwaps++;

      [
        descArrClone[k], descArrClone[swapValueIndex]
        ] = [
        descArrClone[swapValueIndex], descArrClone[k]
      ];
    }
  }

  return Math.min(ascPassSwaps, descPassSwaps);


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = lilysHomework(arr);

    ws.write(result + "\n");

    ws.end();
}
