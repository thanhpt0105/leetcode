class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * (i+1)) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        let list = this.data[address];
        if (list) {
            for(let i = 0; i < list.length; i++) {
                if (list[i][0] === key) {
                    return list[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {

    }
}

// const hashTable = new HashTable(55);
// hashTable.set('a', 123);
// hashTable.set('b', 323);

// console.log(hashTable.get('a'));
// console.log(hashTable.get('b'));


const arr1 = [2,5,1,3,5,2];
const arr2 = [1,2,3,4];

var firstRecurringCharacter = function(arr) {
    let map = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) 
            return arr[i];
        else 
            map.add(arr[i]);
    }
    return undefined;
}

console.log(firstRecurringCharacter(arr1));
console.log(firstRecurringCharacter(arr2));
