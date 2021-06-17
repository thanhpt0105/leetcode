class DoubleLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
        return this;
    }

    prepend(value) {
        let firstNode = new Node(value);
        firstNode.next = this.head;
        this.head.prev = firstNode;
        this.head = firstNode;
        this.length ++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        if (index == 0) {
            this.prepend(value);
        } else {
            let prevNode = this.nodeAt(index-1);
            let newNode = new Node(value);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next.prev = newNode;
        }
        this.length ++;
        return this;
    }

    remove(index) {
        let prevNode = this.nodeAt(index-1);
        let node = prevNode.next;
        prevNode.next = node.next;
        node.next.prev = prevNode;
        node.next = null;
        node.prev = null;
        this.length--;
        return node;
    }

    nodeAt(index) {
        let currNode = this.head;
        for (let i = 0; i < index; i++) {
            currNode = currNode.next;
        }
        return currNode;
    }

    toString() {
        const arr = [];
        let currNode = this.head;
        while(currNode != null) {
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        return arr.toString();
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

const list = new DoubleLinkedList(10);
list.append(5);
list.prepend(1);
console.log(list.toString());
list.insert(1,3);
console.log(list.toString());
list.remove(2);
console.log(list.toString());

console.log(list.nodeAt(0));
console.log(list.nodeAt(1));
console.log(list.nodeAt(2));