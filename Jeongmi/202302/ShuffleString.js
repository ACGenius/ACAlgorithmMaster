/**
 * 1528. Shuffle String
 * 
 * You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

    Return the shuffled string.

    Example 1:
    Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
    Output: "leetcode"
    Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

    Example 2:
    Input: s = "abc", indices = [0,1,2]
    Output: "abc"
    Explanation: After shuffling, each character remains in its position.

    Constraints:

    s.length == indices.length == n
    1 <= n <= 100
    s consists of only lowercase English letters.
    0 <= indices[i] < n
    All values of indices are unique.
 */
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    
    let str ="";
    s = [...s];

    // keep looping until the indices is emtpy
    while(typeof indices !== 'undefined' && indices.length > 0){

        // Take the index of min value
        let idx = indices.indexOf(Math.min.apply(null,indices));
        // Append the character
        str+=s[idx];
        // remove the number based off the index
        indices.splice(idx, 1);
        // remove the character based off the index
        s.splice(idx, 1);
    }
    // return the string
    return str;
    // This could have better solution

};