function result (numerator, denominator) {
    let n = numerator;
    let d = denominator;
    let res = {};
    res[numerator / denominator] = true;
    numerator = numerator % denominator;
    if (!numerator)
        return Object.keys(res).join('');
    
}