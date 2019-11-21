/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    var result =null;
    if(pre.length>1){
        var root = pre[0];
        var vinRootIndex = vin.indexOf(root);
        var vinLeft = vin.slice(0,vinRootIndex);
        var vinRight = vin.slice(vinRootIndex+1,vin.length);
        pre.shift();
        var preLeft = pre.slice(0,vinLeft.length);
        var preRight = pre.slice(vinLeft.length,pre.length);
        result={
            val:root,
            left:reConstructBinaryTree(preLeft,vinLeft),
            right:reConstructBinaryTree(preRight,vinRight)
        }
       
    }else if(pre.length ===1){
        result= {
            val :pre[0],
            left:null,
            right:null
        }
    }
    return result;
}
/**
 * 先拿着前序的根，去中序中数组中，找到以这个根为一棵树的左右子树，然后将左子树的前序、中序找出来存在两个数组中，去构建左子树；
 * 将右子树的前序、中序存在两个vector中，构建右子树，然后链在当前根的左右两边。(以上过程是递归的，直到中序的vector中元素是0个了，即返回一个空结点给上一层，否则就返回当前根结点
 */