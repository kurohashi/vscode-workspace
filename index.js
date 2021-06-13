function missingNumbers(arr) {
    let obj = {};
    for (let i in arr) {
        obj[arr[i]] = 1;
    }
    for (let i = 1; i <= 10; i++) {
        if (!obj[i])
            console.log(i);
    }
}

// missingNumbers([]);

function fibonacci(i, j, rec) {
    if (rec > 5) {
        return i;
    }
    console.log(fibonacci(i + j, rec + 1));
}

console.log(0)
console.log(1)
fibonacci(0, 1, 1);