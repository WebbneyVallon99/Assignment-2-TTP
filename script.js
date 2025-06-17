function myForEach(arr, func) {
  
}


/***************************/
/* Implementation of map() */
/***************************/
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


/******************************/
/* Implementation of filter() */
/******************************/
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


/******************************/
/* Implementation of reduce() */
/******************************/
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


/****************************/
/* Implementation of push() */
/****************************/
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


/***********************************/
/* Implementation of Object.keys() */
/***********************************/
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


/*************************************/
/* Implementation of Object.values() */
/*************************************/
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

/*****************************/
/* Implementation of range() */
/*****************************/
function range(start, end, step = (start < end) ? 1 : -1) {
    // TODO: Returns an array of numbers from start to end (inclusive) going by step
}

/***************************/
/* Implementation of sum() */
/***************************/
function sum(arr) {
    // TODO: Returns the sum of all the numbers in an array
}

/************************************/
/* Implementation of reverseArray() */
/************************************/
function reverseArray(arr) {
    // TODO: Returns a NEW array with elements in the reverse order of the passed in array
}

/*******************************************/
/* Implementation of reverseArrayInPlace() */
/*******************************************/
function reverseArrayInPlace(arr) {
    // TODO: Modifies passed in array to have its elements in reverse order without using an auxilary array
}

/***********************************/
/* Implementation of arrayToList() */
/***********************************/
function arrayToList(arr) {
    // TODO: Returns a list structure that contains the elements of the passed in array
}

/***********************************/
/* Implementation of listToArray() */
/***********************************/
function listToArray(list) {
    // TODO: Returns an array that contains the elements of the passed in list
}

/*********************************/
/* Implementation of deepEqual() */
/*********************************/
function deepEqual(obj1, obj2) {
    // TODO: Performs a deep comparison (property by property) comparison for objects
    // and a direct (===) comparison for non-object types
}

/**********************************/
/* Implementation of moveZeroes() */
/**********************************/
function moveZeroes(arr) {
    // TODO: Modifies the passed in array to have all its zeroes moved to the end while keeping
    // the relative order of all other elements
}
