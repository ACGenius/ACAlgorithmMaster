/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Binary search 
// Big O(n)
// O(log n)

// [1,2,3,4,5,6,7,8,9]
 var searchInsert = function (nums, target) {
    var i = 0;
    var j = nums.length-1;

    var stop = true;

    if (nums.length <= 1) {
        if (nums[i] == target) {
            return i;
        } else {
            if (nums[i] < target) {
                return i + 1;
            } else {
                return i;
            }
        }
    } else {
        while (stop) {
            if (nums[i] == target) {
                return i;
            } else if (nums[j] == target) {
                return j;
            } else {
                var n = Math.floor((i + j) / 2);
                
                if (nums[n] == target) {
                    return n;
                } else {
                    // n<target? n=
                    start mid end 
                }

            }    
        }
        
    }

    
 };

var nums = [1, 3, 5, 6];
var target = 5;
searchInsert(nums, target);

var searchInsert2 = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start < end) {
        
        let mid = Math.floor((start+end)/2);
        if (nums[mid] === target) return mid;
        nums[mid] > target ? end = mid : start = mid + 1;
    }
    if (start === end){
        return target <= nums[start] ? start : start + 1;
    }
};