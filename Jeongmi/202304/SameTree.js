/**
 * 100. Same Tree
 *  Given the roots of two binary trees p and q, write a function to check if they are the same or not.

    Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

    Example 1
    Input: p = [1,2,3], q = [1,2,3]
    Output: true

    Example 2
    Input: p = [1,2], q = [1,null,2]
    Output: false

    Example 3
    Input: p = [1,2,1], q = [1,1,2]
    Output: false

    Constraints:
    The number of nodes in both trees is in the range [0, 100].
    -104 <= Node.val <= 104
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    if(!p && !q){
        return true;
    }else{
        return checkNode(p,q);
    }

    function checkNode(node1, node2){
        if(node1 && node2){
            if(node1.val != node2.val){
                // console.log(node1.val, node2.val);
                return false;
            }else{
                // console.log("node left ",node1.left,node2.left);
                if(checkNode(node1.left,node2.left) == false){
                    return false;  
                }
                // console.log("node right ",node1.right,node2.right);
                if(checkNode(node1.right,node2.right) == false){
                    return false;  
                }

                return true;
            }
        }else if(!node1 && node2 || node1 && !node2){
            // console.log("one of them are null : ",node1,node2);
            return false;
        }
       
    }

    //  Better solution
    // if(!p && !q) return true;
    // if(!p || !q) return false;
    // if(p.val == q.val){
    //     return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
    // } 
    // return false;

    
    
};


