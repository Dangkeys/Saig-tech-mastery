


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayForEach = arr.forEach((item) => {
  return item * 2;
});
let arrayMap = arr.map((item) => {
  return item * 2;
});
console.log("For Each : " + arrayForEach); //For Each : undefined
console.log("Map : " + arrayMap); //Map : 2,4,6,8,10,12,14,16,18




