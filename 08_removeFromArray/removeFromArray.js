const removeFromArray = function(origArray, ...args) {
    let newArray = [];
    for(const item of origArray){
       if (!args.includes(item))
        newArray.push(item);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
