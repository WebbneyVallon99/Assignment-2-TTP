function myForEach(arr, func) {
  
}

function myMap(arr, func) {
  const result = [];
  for (element of arr)
    result.push(func(element));
  return result;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = myMap(numbers, function(number) {
  return number * 2;
});
console.log("Map Test: ");
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

function myFilter(arr, func) {
  
}

function mySome(arr, func) {
  
}

function myEvery(arr, func) {
  
}

function myReduce(arr, func) {
  // TODO
}

function myIncludes(arr, func) {
  
}

function myIndexOf(arr, func) {
  
}

function myPush(arr, func) {
  // TODO
}

function myLastIndexOf(arr, func) {
  
}

function myObjectKeys(obj, func) {
  // TODO
}

function myObjectValues(obj, func) {
  // TODO
}
