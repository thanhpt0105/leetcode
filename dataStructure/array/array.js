class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const last = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return last;
    }

    unshift(item) {

    }

    delete(index) {
        const item = this.data[index];
        this.shiftItem(index);
        return item;
    }

    shiftItem(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const arr = new Array();
console.log(arr);
arr.push("item 1");
arr.push("item 2");
arr.push("item 3");
arr.push("item 4");
console.log(arr);
// console.log(arr.pop());
console.log(arr.delete(5));
console.log(arr);