class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {   
    constructor() {
        this.first = null; //head of linked list
        this.last = null; //tail of linked list
        this.length = 0;
    }
    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode; //equal append in linked list
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    
    dequeue() {
        if (!this.first) {
            return null;
          }
          if (this.first === this.last) { 
            this.last = null;
          }
          const pop = this.first;
          this.first = this.first.next;
          this.length--;
          return pop;
    }
}

// queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.dequeue().value);
// console.log(queue);

class CrazyQueue {
    constructor() {
      this.first = [];
      this.last = [];
    }
  
    enqueue(value) {
      const length = this.first.length;
      for (let i = 0; i < length; i++) {
        this.last.push(this.first.pop());
      }
      this.last.push(value);
      return this;
    }
  
    dequeue() {
      const length = this.last.length;
      for (let i = 0; i < length; i++) {
        this.first.push(this.last.pop());
      }
      this.first.pop();
      return this;
    }
    peek() {
      if (this.last.length > 0) {
        return this.last[0];
      }
      return this.first[this.first.length - 1];
    }
  }
  
  const myQueue = new CrazyQueue();

  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  console.log(myQueue.first);
  console.log(myQueue.last);
  myQueue.dequeue();
  console.log(myQueue.first);
  console.log(myQueue.last);
  myQueue.enqueue(4);
  console.log(myQueue.first);
  console.log(myQueue.last);