/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {};
    for (let i in s) {
        obj[s[i]] = obj[s[i]] || [];
        obj[s[i]].push(i);
    }
    for (let i in obj) {
        if (obj[i].length == 1)
            return obj[i][0];
    }
    return -1;
};