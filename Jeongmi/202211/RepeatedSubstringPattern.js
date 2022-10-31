/**
* 459. Repeated Substring Pattern
* Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.
Example 2:

Input: s = "aba"
Output: false
Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    // If s length is even
    // Divde by 2
    const length = s.length;
    // console.log(length);
        
    const arr = [];
    if (length <= 1) return false;
    if (length <= 3) {
        let err = 0;
        for (let i = 0; i < 2; i++){
            if (s.substring(i + 1, i + 1 + 1) != "") {
                if (s.substring(i, i + 1) != s.substring(i + 1, i + 1 + 1)) {
                    err++;
                }    
            }
        }
        if (err == 0) {
            return true;
        } else {
            return false;
        }
    }
    
    for (let i = 0; i < length; i++) {
        if (length % i === 0) {
            arr.push(i);
        }
    }
    
    for (let j = 0; j < arr.length; j++){
        let err = 0;
        for (let i = 0; i < length; i +=arr[j]){
            if (s.substring(i + arr[j], i + arr[j] + arr[j]) != "") {
                if (s.substring(i, i + arr[j]) != s.substring(i + arr[j], i + arr[j] + arr[j])) {
                    err++;
                }
            }
            
        }
        if (err == 0) {
            return true;
        } 
    }
    
    return false;


};

// var s = "qtpddbuotbbqcwivrfxjujjddntgeiqvdgaijvwcyaubwewpjvygehljxepbpiwuqzdzubdubzvafspqpqwuzifwovyddwyvvburqtpddbuotbbqcwivrfxjujjddntgeiqvdgaijvwcyaubwewpjvygehljxepbpiwuqzdzubdubzvafspqpqwuzifwovyddwyvvburqtpddbuotbbqcwivrfxjujjddntgeiqvdgaijvwcyaubwewpjvygehljxepbpiwuqzdzubdubzvafspqpqwuzifwovyddwyvvbus";
var s = "aaaaaaaaaaaaa";
console.log(repeatedSubstringPattern(s));