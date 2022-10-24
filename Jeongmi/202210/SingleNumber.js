/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Limit Exceeded
var singleNumber = function (nums) {
    const set = new Set(nums); // 1,2,5
    const length = nums.length;
    var newObj = Object.assign(...Array.from(set, v => ({ [v]: 0 }))); 
    // console.log(newObj);
    if (length <= 1) return nums[0];
   
    // O(n)
    for (let i = 0; i < length; i++){
        if (Object.keys(newObj).some(key => key == nums[i])) {
            newObj[nums[i]] = newObj[nums[i]] + 1;
        }

    }
    // console.log(newObj);
    return Object.keys(newObj).find(key => newObj[key] === 1);
    
};

var nums = [2,2,1,1,5,5,6];

console.log(singleNumber(nums));