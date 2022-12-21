/**
 * 145. Binary Tree Postorder Traversal
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 * 
 *  Input: root = [1,null,2,3]
    Output: [3,2,1]

    Input: root = []
    Output: []
    
    Input: root = [1]
    Output: [1]
 */

    /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let num = [];

    return traversal(root);

    function traversal(root){
        if(!root){
            return num;
        }

        // keep looping through all the nodes
        let left = traversal(root.left);
        let right = traversal(root.right);

        // Post Order Traversal Left -> Right -> Root
        if(left.val){
            num.push(left.val);
        }
        if(right.val){
            num.push(right.val);
        }
        
        if(root.val){
            num.push(root.val);
        }
        
        return num;
    }
  

};