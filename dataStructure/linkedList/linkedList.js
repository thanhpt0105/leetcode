class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let lastNode = new Node(value);
        this.tail.next = lastNode;
        this.tail = lastNode;
        this.length ++;
        return this;
    }

    prepend(value) {
        let firstNode = new Node(value);
        firstNode.next = this.head;
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
        }
        this.length ++;
        return this;
    }

    remove(index) {
        let prevNode = this.nodeAt(index-1);
        let node = prevNode.next;
        prevNode.next = node.next;
        node.next = null;
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

    reverse() {
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second != null) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const list = new LinkedList(10);
list.append(5);
list.append(15);
list.prepend(1);
console.log(list.toString());
// list.insert(2, 3);
// console.log(list.toString());
// console.log(list.remove(1));
// console.log(list.toString());
console.log(list.reverse().toString());