/**
 * @param {number} n
 */
var ExamRoom = function(n) {
    this.total = n;
    this.room = [];
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
    switch (this.room.length) {
        case 0:
            this.room.push(0);
            return 0;
        case 1:
            return get1SizeSeat(this.room, this.total);
        default:
            let newSeat = getNewSeatIndex(this.room);
            this.room.splice(newSeat.index, 0, newSeat.value);
            return newSeat.value;
    }
};

/**
 * 
 * @param {Array} room 
 * @param {number} total 
 */
function get1SizeSeat(room, total) {
    switch (room[0]) {
        case 0:
            room.push(total - 1);
            return total - 1;
        case total - 1:
            room.unshift(0);
            return 0;
        default:
            let firstHalf = Math.floor(this.room[0] / 2), secondHalf = Math.floor((this.total - 1 - this.room[0]) / 2) - this.room[0];
            if (this.room[0] < (this.total - 1 - this.room[0])) {
                this.room.push(this.total - 1);
                return this.total - 1;
            } else {

            }
    }
}

/**
 * 
 * @param {Array} room 
 */
function getNewSeatIndex(room) {
    let maxDiff = Math.floor((room[1] + room[0]) / 2) - room[0], maxInd = [0, 1];
    for (let i = 2; i < room.length; i++) {
        let fooDiff = Math.floor((room[i] + room[i - 1]) / 2) - room[i - 1];
        if (fooDiff > maxDiff) {
            maxDiff = fooDiff;
            maxInd = [i - 1, i];
        }
    }
    return { index: maxInd[1], value: Math.floor((room[maxInd[0]] + room[maxInd[1]]) / 2) };
}

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    let index = binSearch(this.room, p);
    if (index < 0)
        return;
    this.room.splice(index, 1);
};

/**
 * 
 * @param {Array} arr 
 * @param {number} elem 
 */
function binSearch(arr, elem) {
    let min = 0, max = arr.length - 1;
    while (min <= max) {
        let mid = Math.floor((max + min) / 2);
        if (arr[mid] == elem)
            return mid;
        else if (elem < arr[mid])
            max = mid - 1;
        else
            min = mid + 1;
    }
    return -1;
}

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */