/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
    if (!pRoot1 || !pRoot2) {
      return false;
    }
    return isSubtree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
  }
   
  function isSubtree(root1, root2) {
    if (!root2) {
      return true;
    }
    if (!root1) {
      return false;
    }
    if (root1.val == root2.val) {
      return isSubtree(root1.left, root2.left) &&
        isSubtree(root1.right, root2.right);
    } else {
      return false;
    }
  }
  