// Question 2: DSA Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

// For example, given:

// const nums = [2, 7, 11, 15];

// const target = 9;

// The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.

/**
 * @param {number[]} numsArray
 * @param {number} target
 * @return {number[] | string}
 */
var twoSum = function (numsArray, target) {
    // Error handling: check if nums is a valid array and target is a number of given array
    if (!Array.isArray(numsArray) || typeof target !== 'number') {
        return 'Invalid input. Please provide a valid array of numbers and a target number for the same';
    }

    // Error handling: check if array has fewer than two elements
    if (numsArray.length < 2) {
        return 'Array must contain at least two numbers to provide sum of array integer array elements';
    }

    const d = new Map();

    // Iterate through nums Array
    for (let i = 0; i < numsArray.length; ++i) {
        const x = numsArray[i];

        // Ensure that the current element is a number
        if (typeof x !== 'number') {
            return `Invalid element at index ${i}: each element of the array should be a number.`;
        }

        const y = target - x;

        // Check if the complement exists in the map
        if (d.has(y)) {
            return [d.get(y), i]; // Return the indices of the two elements
        }

        // Store the current element and its index in the map
        d.set(x, i);
    }

    // No valid pair found
    return 'No two numbers add up to the target.';
};
//// to check output
const nums = [2, 7, 11, 15];

const target = 9;
console.warn(twoSum(nums, target));