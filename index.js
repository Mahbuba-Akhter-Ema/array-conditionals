var numbers = [45, 56, 75, 33, 42, 90];
// console.log(numbers);
// get element by index
var element = numbers[2];
console.log(element);
// 1. console.log(numbers[1]);

//2. set element by index
numbers[2] = 80;
numbers[4] = 100;
console.log(numbers);

// 3. find index of an element
var positionIndex = numbers.indexOf(100);
console.log(positionIndex);