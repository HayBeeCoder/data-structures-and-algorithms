// Given a  2D Array, :

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .

// Example


// -9 -9 -9  1 1 1 
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
// The  hourglass sums are:

// -63, -34, -9, 12, 
// -10,   0, 28, 23, 
// -27, -11, -2, 10, 
//   9,  17, 25, 18
// The highest hourglass sum is  from the hourglass beginning at row , column :

// 0 4 3
//   1
// 8 6 6
// Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

// Function Description

// Complete the function hourglassSum in the editor below.

// hourglassSum has the following parameter(s):

// int arr[6][6]: an array of integers
// Returns

// int: the maximum hourglass sum
// Input Format

// Each of the  lines of inputs  contains  space-separated integers .

// Constraints

// Output Format

// Print the largest (maximum) hourglass sum found in .

// Sample Input

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0
// Sample Output

// 19


//My solution
function calculateSum(index, arr, outer_index) {
    const sum =
        arr[outer_index][index] +
        arr[outer_index][index + 1] +
        arr[outer_index][index + 2] +
        arr[outer_index + 1][index + 1] +
        arr[outer_index + 2][index] +
        arr[outer_index + 2][index + 1] +
        arr[outer_index + 2][index + 2]

    return sum;
}

function hourglassSum(arr) {
    // Write your code here
    let max_sum = 0

    for (let i = 0; i < 4; i++) {
        //Get max sum for each hourglass formed starting with numbers on current row.
        let max = Math.max(
            calculateSum(0, arr, i),
            calculateSum(1, arr, i),
            calculateSum(2, arr, i),
            calculateSum(3, arr, i),
        )


        if (max > max_sum) max_sum = max
    }
    return max_sum

}