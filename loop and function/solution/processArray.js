function processArray(arr) {
    return arr.map(num => {
        if(num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

let arr = [1, 2, 3, 4, 5];
const resultArray = processArray(arr);

console.log(resultArray); // [3, 4, 9, 16, 15]
