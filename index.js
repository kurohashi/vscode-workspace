/**
 * @param {number} n
 */
var ExamRoom = function(n) {
    this.total = n;
    this.room = {};
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
    if (!this.room.hasOwnProperty(0)) {
        this.room[0] = 1;
        return 0;
    } else if (!this.room.hasOwnProperty(this.total - 1)) {
        this.room[this.total - 1] = 1;
        return this.total - 1;
    } else {
        let newSeat = getNewSeatIndex(this.room);
        this.room[newSeat] = 1;
        return newSeat;
    }
};

/**
 * 
 * @param {object} room 
 */
function getNewSeatIndex(room) {}

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    delete this.room[p];
};

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */