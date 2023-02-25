/**
 * 49. Group Anagrams
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
    
    Example 1:
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

    Example 2:
    Input: strs = [""]
    Output: [[""]]
    Example 3:

    Input: strs = ["a"]
    Output: [["a"]]
    

    Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters. 
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // grouping the word

    // Ordered individual string values
    let orderedStrs = strs.map((str)=>str.split('').sort().join(''));
    // Remove duplicate
    let StrSet = new Set(orderedStrs);
    let idx=[]; // array for store index value
    let newStrs=[]; // result array
    let subStrs =[];    // array for Anagram

    // loop through only unique value
    StrSet.forEach((value) => {
        // check if it has the same value 
        // then store its index
        orderedStrs.filter(function(strArrr, index) {
            if(strArrr == value){
                idx.push(index)
            }
        });

        // get the value from array and store in a subStr array
        idx.forEach((i)=>{
            subStrs.push(strs[i]);
        })
        // subStr will be store in result array
        newStrs.push(subStrs);

        // empty array to store next values
        idx =[];
        subStrs =[];
    });

    return newStrs;
};