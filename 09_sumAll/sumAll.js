const sumAll = function(firstInt, secondInt) {

    if (firstInt >= 0 && secondInt >= 0 && Number.isInteger(firstInt) && Number.isInteger(secondInt)) {
        let arr = [firstInt, secondInt]; 
        arr = arr.sort();
        let sum = 0;

        for (i = arr[0]; i <= arr[1]; i++) {
            sum += i;
        }
        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
