const removeFromArray = function(array, ...elementsToRemove) {
    for (let i = 0; i < elementsToRemove.length; i++) {
        let indexOfElement = findElement(array, elementsToRemove[i]);

        if (indexOfElement === -1) continue;    // -1 means the element does not exist in the array

        array.splice(indexOfElement, 1)
    }

    return array;
};

function findElement (array, elementToFind) {
    let indexOfElement = array.findIndex(
        function (element) {
            return element === elementToFind;
        }
    );

    return indexOfElement;
}

module.exports = removeFromArray;
