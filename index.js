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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root.val == key) {
        if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        } else {
            let foo = root;
            while (foo.right) {
                foo.val = foo.right.val;
                if (!foo.right.right)
                    foo.right = null;
                foo = foo.right;
            }
        }
    } else if (root.val > key && root.left) {
        root.left = deleteNode(root.left, key);
    } else if (root.right) {
        root.right = deleteNode(root.right, key);
    }
    return root;
}