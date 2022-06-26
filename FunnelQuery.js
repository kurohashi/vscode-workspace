var MinStack = function () {
    this.stack = [];
    this.min;
    this.top;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);
    this.top = val;
    if (isNaN(this.min) || (this.stack[this.min] > val))
        this.min = this.stack.length - 1;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
    this.top = this.stack[this.stack.length - 1];
    if (this.min == this.stack.length) {
        this.min = undefined;
        for (let i in this.stack) {
            if ((this.stack[i] < this.stack[this.min]) || isNaN(this.min)) {
                this.min = i;
            }
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.top;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack[this.min];
};

let a = new MinStack();

a.push(-2);
a.push(0);
a.push(-1);
console.log(a.getMin(), a.stack)
a.pop()
console.log(a.getMin(), a.stack)