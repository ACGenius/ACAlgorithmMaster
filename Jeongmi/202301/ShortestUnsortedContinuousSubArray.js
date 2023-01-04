/**
 * 581. Shortest Unsorted Continuous Subarray
 * 
 * Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

    Return the shortest such subarray and output its length.

    Example 1:
    Input: nums = [2,6,4,8,10,9,15]
    Output: 5
    Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

    Example 2:
    Input: nums = [1,2,3,4]
    Output: 0

    Example 3:
    Input: nums = [1]
    Output: 0
    

    Constraints:

    1 <= nums.length <= 104
    -105 <= nums[i] <= 105
    

    Follow up: Can you solve it in O(n) time complexity?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    // create new array
    const sortedArr = [...nums];
    
    let count = 0; // count the number that does not match the order.
    let midCount = 0;   // count the number that are matching the number between unsorted numbers.
    let check = false;  // check the unsorted array

    // sort the array in ascending order
    sortedArr.sort(function(a, b){return a-b});

    // loop through unsorted array
    for (let i = 0; i < nums.length; i++){
        //if the items are not in order
        if (nums[i] != sortedArr[i]) {
            check = true; // check is true once the items is not in order
            count++;    // increase the counter for unsorted numbers
            count += midCount;  // add count of the numbers that are matching but they are located in between unsorted order.
            midCount = 0; // reset the midCount number once it is added to count variable
        } else {
            // once it found the unsorted array it will increase another counter 
            // for keep tracking of the numbers are located in between unsorted numbers.
            if(check){
                midCount++;
            }
          
        }
    }
    return count;
};

// other solutions
var findUnsortedSubarray = function(nums) {
    let sortNums = nums.slice()
    sortNums.sort((a,b) => (a - b))
    let start = nums.length - 1, end = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != sortNums[i]){
            start = Math.min(start, i)
            end = Math.max(end, i)
        }
    }
    if(end <= start) return 0
    return end - start + 1
};