const removeFromArray = function(arr, ...num) {
    for (i = 0; i < num.length; i++){
        arr = arr.filter((removeNum) => removeNum !== num[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

