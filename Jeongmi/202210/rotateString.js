/**
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
A shift on s consists of moving the leftmost character of s to the rightmost position.
For example, if s = "abcde", then it will be "bcdea" after one shift.

Input: s = "abcde", goal = "cdeab"
Output: true

Input: s = "abcde", goal = "abced"
Output: false
 */
var s = "abcde";
var goal = "cdeab";

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// var rotateString = function(s, goal) {
//     console.log(s.substring(0, 1));
//     let newStr = Array.from(s);
//     var length = newStr.length;
//     let str = "";
//     for (let i = 0; i < length; i++){
//         str = newStr.shift();
//         newStr.push(str);

        
//         console.log(newStr);
//     }
// };

// Solution 1
var rotateString = function(s, goal) {
    console.log(s);
    var length = s.length;
   //console.log(s.substring(1, length));
    for (let i = 0; i < length-1; i++){
        s = s.substring(1, length) + s.substring(0, 1);
        console.log(s);
        if (s == goal) {
            return true;
        }
    }
    return false;
};

console.log(rotateString(s, goal));