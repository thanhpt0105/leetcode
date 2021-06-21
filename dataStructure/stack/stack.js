class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {   
    constructor() {
        this.top = null; //head of linked list
        this.bottom = null; //tail of linked list
        this.length = 0;
    }
    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top; //equal prepend method in linked list
            this.top = newNode;
        }
        this.length++;
        return this;
    }
    
    pop() {
        if (!this.top) {
            return null;
          }
          if (this.top === this.bottom) {
            this.bottom = null;
          }
          const pop = this.top;
          this.top = this.top.next;
          this.length--;
          return pop;
    }
}

class StackArray{
    constructor(){
        this.arr = [];
    }

    peek() {
        return this.arr[this.arr.length-1];
    }

    push(value) {
        this.arr.push(value);
        return this;
    }

    pop() {
        return this.arr.pop();
    }
}

stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();

// console.log(stack);

stackArr = new StackArray();
stackArr.push(1);
stackArr.push(2);
stackArr.push(3);
console.log(stackArr.pop());

console.log(stackArr);