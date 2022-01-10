const Parser = require('expr-eval').Parser;
var formula = "(E1+E2+E3)/2";
var foo = formula.split(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/i);
var points = [];
foo.forEach(k => {
    if (isNaN(k))
        points.push(k);
});
var body = {
    A: { 1: { 0: 1, 1: 1, 2: 1 }, 2: { 0: 1, 1: 1 }, 3: { 0: 1, 1: 1 } },
    B: { 2: { 0: 1, 1: 1 }, 3: { 0: 1, 1: 1 }, 4: { 0: 1, 1: 1 } },
    C: { 3: { 0: 1, 1: 1 }, 4: { 0: 1, 1: 1 }, 5: { 0: 1, 1: 1 } },
    D: { 1: { 0: 1, 1: 1 }, 3: { 0: 1, 1: 1 }, 5: { 0: 1, 1: 1 }, 6: { 0: 1, 1: 1 } },
};
var E1 = Object.assign({}, body);
var E2 = Object.assign({}, body);
var E3 = Object.assign({}, body);
var meta = { E1: E1, E2: E2, E3: E3 }
objFormula(formula, meta, points);

function objFormula(formula, data, points) {
    let keys = {};
    points.forEach(pnt => {
        for (let i in data[pnt]) {
            Object.assign(keys, getKeys(data[pnt], i));
        }
    });
    keys = Object.keys(keys);
    console.log(keys);
    let result = applyFormula(formula, data, points, keys);
    console.log(result);
}

function getKeys(data, key) {
    let k = key.split(".");
    k = key[key.length - 1];
    let foo = data[k];
    switch (typeof foo) {
        case "object":
            let keys = {};
            for (let i in foo)
                Object.assign(keys, getKeys(foo, `${key}.${i}`));
            return keys;
        default:
            let result = {};
            result[key] = 1;
            return result;
    }
}

function applyFormula(formula, data, points, keys) {
    let result = {};
    keys.forEach(key => {
        let bar = key.split(".");
        let obj = {};
        points.forEach(pnt => {
            let foo = data[pnt];
            bar.forEach(i => {
                try {
                    foo = foo[i];
                } catch (error) {
                    foo = 0;
                }
            });
            obj[pnt] = foo || 0;
        });
        let res = result;
        for (let i = 0; i < bar.length - 1; i++) {
            res[bar[i]] = res[bar[i]] || {};
            res = res[bar[i]];
        }
        res[bar[bar.length - 1]] = Parser.evaluate(formula, obj);
    });
    return result;
}

// function objFormula(body, objects) {
//     var sum = {};
//     for (let i in body) {
//         Object.assign(sum, body[i]);
//     }
//     for (let i in sum) {
//         let obj = {};
//         objects.forEach(p => {
//             obj[p] = body[p][i] || {};
//         });
//         sum[i] = applyFormula(formula, obj);
//     }
//     console.log(sum);
// }

// function getKeys(objs) {
//     let keys = {};
//     for (let i in objs) {
//         Object.keys(objs[i]).forEach(k => {
//             keys[k] = 1;
//         });
//     }
//     return Object.keys(keys);
// }

// function applyFormula(formula, obj) {
//     let allDates = getKeys(obj);
//     let foo = {};
//     allDates.forEach(date => {
//         let bar = {};
//         for (let i in obj) {
//             bar[i] = obj[i][date] || 0;
//         }
//         foo[date] = Parser.evaluate(formula, bar);
//     });
//     return foo;
// }