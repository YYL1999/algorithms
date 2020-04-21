/**
 * @param {string[]} strs
 * @return {string}
 * 取第一个值作为最长前缀 
 * 依次遍历  若超过长度退出循环取出最长匹配项再次遍历
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0 ) return '';
    let prev = strs[0];
    for(let i =1; i<strs.length;i++) {
        let j = 0;
        for(;j<prev.length && j< strs[i].length;j++) {
            if(prev.charAt(j) !== strs[i].charAt(j)) break;
        }
        prev = prev.substring(0, j)
        if (prev === '') return ''
    }
    return prev
};