
let fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index, array) => {
    array[index] = fruit.toUpperCase();
});
console.log(fruits); // Output: ['APPLE', 'BANANA', 'CHERRY']

let fruitsMap = ['apple', 'banana', 'cherry'];
fruitsMap.map((fruit, index, array) => {
    array[index] = fruit.toUpperCase();
});
console.log(fruitsMap); // Output: ['APPLE', 'BANANA', 'CHERRY']


