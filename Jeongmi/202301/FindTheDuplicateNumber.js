/**
 * 287. Find the Duplicate Number
 * 
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

    There is only one repeated number in nums, return this repeated number.

    You must solve the problem without modifying the array nums and uses only constant extra space.


    Example 1:
    Input: nums = [1,3,4,2,2]
    Output: 2

    Example 2:
    Input: nums = [3,1,3,4,2]
    Output: 3
    

    Constraints:

    1 <= n <= 105
    nums.length == n + 1
    1 <= nums[i] <= n
    All the integers in nums appear only once except for precisely one integer which appears two or more times.

 */

    /**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    // Time complexity issue
    // const data = [];
    // for(let i=0;i<nums.length;i++){
        
    //     if(!data.includes(nums[i])){
    //         data.push(nums[i])
    //     }else{
    //         return nums[i];
    //     }
    // }
    const counts = {};
    nums.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    return Object.keys(counts).find(key => counts[key] >= 2);
};