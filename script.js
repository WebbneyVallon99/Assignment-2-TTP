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

function myPush(arr, ...elements) {
  for (const element of elements)
    arr[arr.length] = element;

  return arr.length;
}

console.log("--------Push Test--------");
console.log("Original Array:");
let fruits = ['apple', 'banana'];
console.log(fruits);
console.log("Original Length: ");
console.log(fruits.length);
let length = myPush(fruits, 'orange');
console.log("Final Array");
console.log(fruits); // ['apple', 'banana', 'orange']
console.log("Final Length:")
console.log(length); // 3

function myLastIndexOf(arr, func) {
  
}

function grabKeys(obj) {
  let result = [];
  for (const key in obj)
    result.push(key);
  return result;
}

const student = {
  firstname: 'John',
  lastname: 'Doe',
  age: 22,
  gender: 'male'
};

const keys = grabKeys(student);
console.log("--------Keys Test--------");
console.log("Object:");
console.log(student);
console.log("Keys:");
console.log(keys); // ['firstname', 'lastname', 'age', 'gender']

function grabValues(obj) {
  let result = [];
  for (const key in obj)
    result.push(obj[key]);
  return result;
}

const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020
};

const values = grabValues(car);
console.log("--------Values Test--------");
console.log("Object:");
console.log(car);
console.log("Keys:");
console.log(values); // ["Toyota", "Corolla", 2020]