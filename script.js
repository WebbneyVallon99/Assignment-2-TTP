function myForEach(arr, func) {
  
}

function myMap(arr, func) {
  const result = [];
  for (element of arr)
    result.push(func(element));
  return result;
}

console.log("--------Map Test--------");
let numbers = [1, 2, 3, 4, 5];
console.log("Original Array:");
console.log(numbers);
let doubledNumbers = myMap(numbers, function(number) {
  return number * 2;
});
console.log("Doubled Array:");
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

function myFilter(arr, func) {
  const result = [];
  for (element of arr)
    if (func(element))
      result.push(element);
  return result;
}

console.log("--------Filter Test--------");
console.log("Original Array:");
console.log(numbers);
let evenNumbers = myFilter(numbers, function(number) { return number % 2 === 0; });
console.log("Even Filtered Array:");
console.log(evenNumbers); // [2, 4]

function mySome(arr, func) {
  
}

function myEvery(arr, func) {
  
}

function myReduce(arr, func, initialValue) {
  let accumulator = arr[0];
  if (initialValue != undefined)
    accumulator = func(initialValue, arr[0]);

  for (let i = 1; i < arr.length; i++)
    accumulator = func(accumulator, arr[i]);

  return accumulator;
}

console.log("--------Reduce Test--------");
console.log("Original Array:");
console.log(numbers);
let sum = myReduce(numbers, function(acc, num) {
  return acc + num;
}, 0);
console.log("Summed Value:")
console.log(sum); // 15

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
