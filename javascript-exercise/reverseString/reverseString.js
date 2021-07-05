const reverseString = function(stringToReverse) {
    let reversedString = stringToReverse.split('').reverse().join('');

    return reversedString;
};

module.exports = reverseString;
