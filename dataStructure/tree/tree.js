class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            let isInserted = false;
            while (!isInserted) {
                if (currentNode.value > value) {
                    if (currentNode.left == null) {
                        currentNode.left = newNode;
                        isInserted = true;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (currentNode.value <= value) {
                    if (currentNode.right == null) {
                        currentNode.right = newNode;
                        isInserted = true;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
        return this;
    }

    lookup(value) {
        if (!this.root) {
            return null;
        } else {
            let currentNode = this.root;
            while(currentNode) {
                if (currentNode.value < value) {
                    currentNode = currentNode.right;
                } else if (currentNode.value > value) {
                    currentNode = currentNode.left;
                } else if (currentNode.value == value) {
                    return currentNode;
                }
            }
            return null;
        }
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (currentNode.value < value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value > value) {
                parentNode = currentNode
                currentNode = currentNode.left;
            } else if (currentNode.value == value) {
                //no right child
                if (currentNode.right == null) {
                    if (!parentNode) {
                        this.root = currentNode.left;
                    } else {
                        if (parentNode.value > value) {
                            parentNode.left = currentNode.left;
                        } else {
                            parentNode.right = currentNode.left;
                        }
                    }
                } else if (currentNode.right.left == null) { //right child has no left child
                    currentNode.right.left = currentNode.left;
                    if (!parentNode) {
                        this.root = currentNode.right;
                    } else {
                        if (parentNode.value > value) {
                            parentNode.left = currentNode.right;
                        } else {
                            parentNode.right = currentNode.right;
                        }
                    }
                } else { //right child has left child
                    //find left most child of right child
                    let leftMostChild = currentNode.right.left;
                    let leftMostParent = currentNode.right;
                    while (leftMostChild.left != null) {
                        leftMostParent = leftMostChild;
                        leftMostChild = leftMostChild.left;
                    }

                    leftMostParent.left = leftMostChild.right;
                    leftMostChild.left = currentNode.left;
                    leftMostChild.right = currentNode.right;
                    if (!parentNode) {
                        this.root = leftMostChild;
                    } else {
                        if (parentNode.value > value) {
                            parentNode.left = leftMostChild;
                        } else {
                            parentNode.right = leftMostChild;
                        }
                    }
                }
                return this;
            }
        }
    }
}

function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(179);
// tree.insert(15);
// tree.insert(1);
tree.insert(93);
tree.insert(3);
tree.insert(98);
tree.insert(49);
tree.insert(95);
tree.insert(100);
tree.insert(10);
tree.insert(54);
tree.insert(94);
tree.insert(96);

tree.remove(93);

console.log(JSON.stringify(traverse(tree.root)));


// console.log(tree.lookup(15));
// console.log(tree.lookup(50));