/**
 * 128. Longest Consecutive Sequence
 * 
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // if nums is empty return 0 
    if(nums.length <=0){
        return 0;
    }
    // sort by numbers
    nums.sort(function(a, b){return a-b});
    // set remove duplicate numbers
    const newNums=[...new Set(nums)];
    
    // 0 1 2 3 4 5 6 7 8 
    let result = 1;
    let maxResult = 1;
    
    // looping through each items check next item in the list
    for (let i = 0; i < newNums.length - 1; i++){
        // if they are euqal means it is sequence number
        // increse the counter
        if(newNums[i]+1 == newNums[i+1]){
            result++;
        } else {
            // if it is not equal then reset the counter
            // compare max counter
            maxResult = Math.max(maxResult,result);
            result = 1;
        }
    }
    // Get the max counter 
    maxResult = Math.max(maxResult,result);
    
    return maxResult;
    
};