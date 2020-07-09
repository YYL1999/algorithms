/**
 * @param {number} n
 * @return {string[]}
 * 1、某一次递归终止时需要将当前字符存入数组
 * 2、字符任取一个位置左侧必 左括号>=右括号
 * 3、每次递归除了需要传当前字符还需要记清当前左右括号数
 */
var generateParenthesis = function(n) {
    let res = [];
    let help = (s, left, right) => {
        if (left === n && right === n ) {
            res.push(s)
        }
        if(left < n) {
            help(s+'(', left+1, right)
        }
        if (right < left) {
            help(s+')', left, right +1)
        }
    }
    help('', 0, 0)
    return res;
 };