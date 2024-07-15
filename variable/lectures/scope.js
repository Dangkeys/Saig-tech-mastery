


var globalVar = "GlobalVar";
let globalLet = "GlobalLet";

console.log("Before block: " + globalVar); // GlobalVar
console.log("Before block: " + globalLet); // GlobalLet

if (true) {
  var globalVar = "BlockVar";
  let globalLet = "BlockLet";
  console.log("Inside block: " + globalVar); // BlockVar
  console.log("Inside block: " + globalLet); // BlockLet
}

console.log("After block: " + globalVar); // BlockVar
console.log("After block: " + globalLet); // GlobalLet




