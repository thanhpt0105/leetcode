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

    reverseSubList(m, n) { 
        let prev = null;
        let curr = this.head;
        while (m > 1) {
            prev = curr;
            curr = curr.next;
            m--;
            n--;
        }
        let reverseTail = curr;
        let second = curr.next;
        let temp = null;
        console.log(curr);
        console.log(second);
        while (n > 1) {
            temp = second.next;
            second.next = curr;
            curr = second;
            second = temp;
            n--;
        }
        reverseTail.next = second;
        if (prev !== null) {
            prev.next = curr;
        } else {
            console.log(curr);
            this.head = curr;
        }
        return this;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
// console.log(list.toString());
// list.reverseSubList(1,3);
// console.log(list.toString());
// console.log(list.reverseSubList(1,3));
// console.log(list.toString());
// console.log(list.toString());

const list2 = new LinkedList(1);
list2.append(2);
list2.reverseSubList(1,2);
console.log(list2.toString());