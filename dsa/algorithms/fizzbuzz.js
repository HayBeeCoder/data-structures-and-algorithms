//function to create an array of n from 0 
//to a number less than passed number

function createRange(end) {
    return [...new Array(end).keys()]
}

const numbers = createRange(100)





//implementation of 
function fizzbuzz(n) {


    for (let number of n) {

        if (number % 15 == 0) {
            console.log("FizzBuzz")
        } else if (number % 3 == 0) {
            console.log("Fizz")
        } else if (number % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(number)
        }
    }
}

// fizzbuzz(numbers)