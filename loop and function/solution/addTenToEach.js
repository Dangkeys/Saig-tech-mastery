function addTenToEach(arr) {
    arr.map((num, index, array)=> {
        array[index] = num + 10;
    });
}

// Example usage:
let numbers = [1, 2, 3];
addTenToEach(numbers);
console.log(numbers); // Output: [11, 12, 13]
