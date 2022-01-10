const Parser = require('expr-eval').Parser;
var formula = "E2+E1";
var foo = formula.split(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/i);
var points = [];
foo.forEach(k => {
    if (isNaN(k))
        points.push(k);
});
var body = {
    "E1": {
        "Firefox": {
            "India": {
                "2021-12-30T00:00+05:30": 2,
                "2021-12-31T00:00+05:30": 2,
                "2022-01-01T00:00+05:30": 0,
                "2022-01-02T00:00+05:30": 0,
                "2022-01-03T00:00+05:30": 1,
                "2022-01-04T00:00+05:30": 1,
                "2022-01-05T00:00+05:30": 2,
                "2022-01-06T00:00+05:30": 2
            }
        },
        "Chrome": {
            "India": {
                "2021-12-30T00:00+05:30": 13,
                "2021-12-31T00:00+05:30": 6,
                "2022-01-01T00:00+05:30": 7,
                "2022-01-02T00:00+05:30": 52,
                "2022-01-03T00:00+05:30": 30,
                "2022-01-04T00:00+05:30": 18,
                "2022-01-05T00:00+05:30": 15,
                "2022-01-06T00:00+05:30": 6
            },
            "United States": {
                "2021-12-30T00:00+05:30": 0,
                "2021-12-31T00:00+05:30": 0,
                "2022-01-01T00:00+05:30": 0,
                "2022-01-02T00:00+05:30": 0,
                "2022-01-03T00:00+05:30": 2,
                "2022-01-04T00:00+05:30": 2,
                "2022-01-05T00:00+05:30": 4,
                "2022-01-06T00:00+05:30": 2
            }
        }
    },
    "E2": {
        "Chrome": {
            "India": {
                "2021-12-30T00:00+05:30": 0,
                "2021-12-31T00:00+05:30": 1,
                "2022-01-02T00:00+05:30": 0,
                "2022-01-03T00:00+05:30": 1,
                "2022-01-04T00:00+05:30": 2,
                "2022-01-05T00:00+05:30": 0,
                "2022-01-06T00:00+05:30": 0
            },
            "United States": {
                "2021-12-30T00:00+05:30": 0,
                "2021-12-31T00:00+05:30": 1,
                "2022-01-01T00:00+05:30": 0,
                "2022-01-02T00:00+05:30": 0,
                "2022-01-04T00:00+05:30": 0,
                "2022-01-05T00:00+05:30": 0,
                "2022-01-06T00:00+05:30": 1
            }
        },
        "Firefox": {
            "India": {
                "2021-12-30T00:00+05:30": 0,
                "2021-12-31T00:00+05:30": 0,
                "2022-01-01T00:00+05:30": 0,
                "2022-01-02T00:00+05:30": 0,
                "2022-01-03T00:00+05:30": 0,
                "2022-01-04T00:00+05:30": 1,
                "2022-01-05T00:00+05:30": 0,
                "2022-01-06T00:00+05:30": 0
            }
        }
    }
};
objFormula(formula, body, points);

function objFormula(formula, data, points) {
    console.log(formula);
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
    k = k[k.length - 1];
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