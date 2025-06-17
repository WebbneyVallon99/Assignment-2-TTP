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
let total = myReduce(numbers, function(acc, num) {
  return acc + num;
}, 0);
console.log("Summed Value:")
console.log(total); // 15

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
    if (typeof obj1 != "object" || obj1 === null || obj2 === null)
        return obj1 === obj2;

    if (Object.keys(obj1).length != Object.keys(obj2).length)
        return false;

    for (const key of Object.keys(obj1)) {
        if (!(Object.keys(obj2).includes(key)))
            return false;

        if (!deepEqual(obj1[key], obj2[key]))
            return false;
    }

    return true;
}

console.log("--------Deep Equal Test--------");
console.log("Original Object");
let obj = {here: {is: "an"}, object: 2};

console.log("Object (Self) Test: Expected True");
console.log("Result:");
console.log(deepEqual(obj, obj)); // → true

console.log("Object (Obj 2) Test: Expected False");
console.log("Obj 2:");
let obj2 = {here: 1, object: 2};
console.log(obj2);
console.log("Result:");
console.log(deepEqual(obj, obj2)); // → false

console.log("Object (Obj 3) Test: Expected True");
console.log("Obj 3:");
let obj3 = {here: {is: "an"}, object: 2};
console.log(obj3);
console.log("Result:");
console.log(deepEqual(obj, obj3)); // → true

/**********************************/
/* Implementation of moveZeroes() */
/**********************************/
function moveZeroes(arr) {
    let numZeroes = 0;
    for (let j = 0; j < arr.length - numZeroes - 1; j++) {
        if (arr[j] != 0)
            continue;

        for (let k = j; k < arr.length - numZeroes - 1; k++) {
            let temp = arr[k];
            arr[k] = arr[k + 1];
            arr[k + 1] = temp;
        }
        numZeroes++;
    }
}

console.log("--------Move Zeroes Test--------");
console.log("Original Array:");
let input = [0, 1, 0, 3, 12];
console.log(input);
console.log("Adjusted Array:");
moveZeroes(input);
console.log(input);
