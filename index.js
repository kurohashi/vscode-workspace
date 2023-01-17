/**
 * @param {number[][]} rects
 */
var Solution = function (rects) {
    this.rects = [];
    this.sumOfArea = 0;
    for (let r of rects) {
        let area = (r[2] - r[0]) * (r[3] - r[1]);
        this.sumOfArea += area;
        rects.push([r, area]);
    }
    rects.sort((a, b) => a[1] - b[1]);
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
    let rand = getRndInteger(1, this.sumOfArea);
    let rect = searchRect(this.rects, rand);
};

/**
 * 
 * @param {number[][]} rects 
 * @param {number} arPoint 
 * @returns {number[]}
 */
function searchRect(rects, arPoint) { }

/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */