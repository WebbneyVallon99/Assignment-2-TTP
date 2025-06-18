function myForEach(arr, func) {
  for (let i = 0; i < arr.length; i++){
    func(arr[i]);
  }
}

let numbers = [1, 2, 3, 4, 5];

myForEach(numbers,function(number) {
  console.log(number); // 1 2 3 4 5
});


function myMap(arr, func) {
  
}

function myFilter(arr, func) {
  
}

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

function myReduce(arr, func) {
  
}

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

function myPush(arr, func) {
  
}

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

function myObjectKeys(obj, func) {
  
}

function myObjectValues(obj, func) {
  
}
