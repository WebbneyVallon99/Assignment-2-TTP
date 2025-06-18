function myForEach(arr, func) {
  for (let i = 0; i < arr.length; i++){
    func(arr[i]);
  }
}

let numbers = [1, 2, 3, 4, 5];

myForEach(numbers,function(number) {
  console.log(number); // 1 2 3 4 5
});


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
    for (let j = 0; j < arr.length; j++){
        if (func(arr[j]))
            return true;
    }
    return false;
}

let hasEvenNumber = mySome(numbers,function(num) {
  return num % 2 === 0;
});
console.log(hasEvenNumber); // true


function myEvery(arr, func) {
  for (let w = 0; w < arr.length; w++) {
    if (func(arr[w]))
        return true;
  }
  return false;
}

let Everynumber = [2, 4, 6, 8, 10];
let allNumbersEven = myEvery(Everynumber,function(num) {
  return num % 2 === 0;
});
console.log(allNumbersEven); // true

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


function myIncludes(arr, target) {
  for (let v = 0; v < arr.length; v++){
    if (arr[v] === target)
        return true;
  }
  return false;
}

const fruits = ['apple', 'banana', 'orange', 'grape'];
const hasBanana = myIncludes(fruits,'banana');
console.log(hasBanana); // true


function myIndexOf(arr, target) {
  for (let d = 0; d < arr.length; d++){
    if (arr[d] === target)
        return d;
  }
  return -1;
}

const indexOrange = myIndexOf(fruits,'orange');
console.log(indexOrange); // 2

const indexPear = myIndexOf(fruits,'pear');
console.log(indexPear); // -1

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
let fruits2 = ['apple', 'banana'];
console.log(fruits2);
console.log("Original Length: ");
console.log(fruits2.length);
let length = myPush(fruits2, 'orange');
console.log("Final Array");
console.log(fruits2); // ['apple', 'banana', 'orange']
console.log("Final Length:")
console.log(length); // 3


function myLastIndexOf(arr, target) {
 for (let n = arr.length - 1; n >= 0; n--){
    if (arr[n] === target)
        return n;
 }
 return -1;
}

const animals = ['cat', 'dog', 'bird', 'dog', 'fish'];

const lastIndexDog = myLastIndexOf(animals,'dog');
console.log(lastIndexDog); // 3

const lastIndexCow = myLastIndexOf(animals,'cow');
console.log(lastIndexCow); // -1


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
    let rangeArr = [];
    if (start < end) 
        for (let y = start; y <= end; y += step)
            rangeArr.push(y);
    else
        for (let y = start; y >= end; y += step)
            rangeArr.push(y);
    
    return rangeArr;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

/***************************/
/* Implementation of sum() */
/***************************/
function sum(arr) {
    let arrSum = 0;
    for (let q = 0; q < arr.length; q++){
     arrSum += arr[q];
    }
    return arrSum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

/************************************/
/* Implementation of reverseArray() */
/************************************/
function reverseArray(arr) {
    let reverseArr = [];
    for (let x = 0; x < arr.length; x++){
        reverseArr[x] = arr[arr.length -1 - x];
    }
    return reverseArr;
}


/*******************************************/
/* Implementation of reverseArrayInPlace() */
/*******************************************/
function reverseArrayInPlace(arr) {
    for (let x = 0; x < arr.length / 2; x++){
        let temp = arr[x];
        arr[x] = arr[arr.length -1 - x];
        arr[arr.length -1 - x] = temp;
    }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/***********************************/
/* Implementation of arrayToList() */
/***********************************/
function arrayToList(arr) {
    let result = prepend(arr.at(-1), null);
    for (let i = arr.length - 2; i >= 0; i--)
        result = prepend(arr[i], result);
    return result;
}

// Preprend helper function
function prepend(element, list) {
    const result = {};
    result.value = element;
    result.rest = list;
    return result;
}


/***********************************/
/* Implementation of listToArray() */
/***********************************/
function listToArray(list) {
    const arr = [];
    let temp = list;
    do {
        arr.push(temp.value);
        temp = temp.rest;
    } while (temp != null);
    return arr;
}

console.log("--------A List Tests--------");
console.log("Prepend Helper Test: Expected 10 > 20 > null");
console.log(prepend(10, prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}

console.log("--Array To List Test--");
console.log("Array:");
let arr = [10, 20, 30];
console.log(arr);
console.log("List:")
let list = arrayToList(arr);
console.log(list);

console.log("--List To Array Test--");
console.log("List:")
console.log(list);
console.log("Array:");
arr = listToArray(list);
console.log(arr);


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
