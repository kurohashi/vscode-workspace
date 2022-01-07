const Parser = require('expr-eval').Parser;

const parser = new Parser();

// or
// console.log(Parser.evaluate('(A + B)*C', { A: 7, B: 3, C: 3 })) // 42


var formula = "(C+D)/(A+B)";
var points = {};
for (let i in formula) {
    if (formula[i].match(/[A-Z]/i))
        points[formula[i]] = 1;
}
points = Object.keys(points);
/**
 * 1. Extract list of variables in sorted order.
 * 2. Check availability of last element, if not present, discard the formula.
 * 3. If 
 */
var body = { A: { 1: 1, 2: 2, 3: 3 }, B: { 2: 2, 3: 3, 4: 4 }, C: { 3: 3, 4: 4, 5: 5 }, D: { 1: 1, 3: 3, 5: 5, 6:6 } }
var sum = {};
for (let i in body) {
    Object.assign(sum, body[i]);
}
for (let i in sum) {
    let obj = {};
    points.forEach(p => {
        obj[p] = body[p][i] || 0;
    });
    sum[i] = Parser.evaluate(formula, obj);
}
console.log(sum);