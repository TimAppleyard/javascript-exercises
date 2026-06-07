const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(arr) {
  let sumNum = 0;
	for(let i of arr){
    sumNum += i;
  }
  return sumNum;
};

const multiply = function(arr) {
  let multNum = 1;
	for(let i of arr){
    multNum *= i;
  }
  return multNum;
};

const power = function(numOne,numTwo) {
	let powerNum = numOne;
  for(let i = 2; i <= numTwo; i++){
    powerNum *= numOne;
  }
  return powerNum;
};

const factorial = function(num) {
	if(num == 0)
    return 1;
  
  let fact = 1;
  for(let i = 1; i <= num; i++){
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
