/**
 * @param {string} s
 * @return {number}
 * 起始位置和后置位置相同 肯定不重复
 */
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i
        }
    }
    return -1
};