/**
 * Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. 
Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
Example 2:

Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]

 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
     let newArr1 = [];
     let newArr2 = [];
     arr1.sort(function (a, b) { return a - b });
     newArr2 = arr1.filter(val => !arr2.includes(val));
    for (let i = 0; i < arr2.length; i++){
        for (let j = 0; j < arr1.length; j++){
            if (arr2[i] == arr1[j]) {
                newArr1.push(arr1[j]);
            } 
        }

    }
     return [...newArr1,...newArr2];

 };

// var arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
// var arr2 = [2, 1, 4, 3, 9, 6];
var arr1 = [28, 6, 22, 8, 44, 17];
var arr2 = [22, 28, 8, 6];
console.log(relativeSortArray(arr1,arr2));