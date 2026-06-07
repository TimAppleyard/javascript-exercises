const sumAll = function(firstNum, secondNum) {
    if(firstNum < 0 || secondNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(secondNum))
        return "ERROR";
    let smallNum = 0;
    let bigNum = 0;
    if(firstNum > secondNum) {
        smallNum = secondNum;
        bigNum = firstNum;
    } else {
        smallNum = firstNum;
        bigNum = secondNum;
    }
    let sum = 0
    for(let i = smallNum; i <= bigNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
