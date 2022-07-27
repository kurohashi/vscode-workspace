// Create an array [1, 2, 3, -2, -4, 5]. Find the contiguous of array.
// [-1, -2, -3, -4]

let array = [1, 2, 3, -2, -4, 5];
let sum = -Infinity;
let comparator = 0;

for (let i = 0; i < array.length; i++) {
    // let foo = -Infinity;
    comparator += array[i];
    if (comparator > sum) {
        sum = comparator;
    }
}

console.log("Max sum", sum);