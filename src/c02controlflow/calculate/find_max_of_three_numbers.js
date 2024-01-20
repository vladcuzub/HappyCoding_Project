// Write a program that accepts three integers and finds the maximum of three.
// Test Data :
// Input the first integer: 25
// Input the second integer: 35
// Input the third integer: 15
// Expected Output:
// Maximum value of three integers: 35

function findMaxNumber(firstNumber, secondNumber, thirdNumber) {
    if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
        return firstNumber;
    } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
        return secondNumber;
    } else {
        return thirdNumber;
    }
}

module.exports = findMaxNumber