/**
 * 482. License Key Formatting
 * 
 * You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

    We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

    Return the reformatted license key.

    Example 1:

    Input: s = "5F3Z-2e-9-w", k = 4
    Output: "5F3Z-2E9W"
    Explanation: The string s has been split into two parts, each part has 4 characters.
    Note that the two extra dashes are not needed and can be removed.
    Example 2:

    Input: s = "2-5g-3-J", k = 2
    Output: "2-5G-3J"
    Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.
    

    Constraints:

    1 <= s.length <= 105
    s consists of English letters, digits, and dashes '-'.
    1 <= k <= 104
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    // replace all the - into '' and covert the letter into uppercase
    let strList = s.replaceAll('-', '').toUpperCase();
    let length = strList.length;
    
    // Get the remainder of the string
    let len = length % k;
    // Get frist group its length will be vary based off the remainder
    let result =strList.substring(0,len);
    
    // loop through and increase the counter based off k number
    for (let i = len; i < length; i += k){
        // if the first group is empty then do not add -
        if(!result){
            result += strList.substring(i,k+i);
        } else {
            // other wise this needs to add -
             result += '-'+strList.substring(i,k+i);
        }
       
    }

    // return the final result
    return result;
};