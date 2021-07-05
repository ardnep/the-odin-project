const repeatString = function(string, repetitionValue) {
    if (repetitionValue < 0) {
        return "ERROR";
    }

    let newString = ""; 
    for (let i = 0; i < repetitionValue; i++) {
        newString += string;
    }
    return newString;
};

module.exports = repeatString;
