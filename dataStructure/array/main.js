const arr = [1, 2, 3, 4];
// console.log(arr);

console.log(arr);

//push  O(1)
arr.push(5);
console.log(arr);

//pop 0(1)
arr.pop();
// console.log(arr);
arr.pop();
// console.log(arr);

//shift O(n)
arr.unshift(0);
console.log(arr);

//splice O(n)
arr.splice(2, 0, 2);
console.log(arr);

//-------------------------------
function reverse(str) {
    return str.split('').reverse().join('');
}

var str = "abcdef";
console.log(reverse(str));
console.log(reverse("a"));

function mergeSortedArray(arr1, arr2) {
    const result = [];
    let arr1item = arr1[0];
    let arr2item = arr2[0];
    let i = 1;
    let j = 1;
    while (arr1item || arr2item) {
        if (!arr2item || arr1item < arr2item) {
            result.push(arr1item);
            arr1item = arr1[i];
            i++;
        } else {
            result.push(arr2item);
            arr2item = arr2[j];
            j++;
        }
    }
    return result;
}

const arr2 = mergeSortedArray([0,3,4,31], [4,6,30]);
console.log(arr2);