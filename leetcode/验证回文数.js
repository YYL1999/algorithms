/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s == null || s.length == 0) {
        return true;
    }
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    var len = s.length;
    var middle = Math.floor((len-1)/2);
    for(var i = 0; i <= middle; i++) {
        if(s[i] !== s[len-1-i]) {
            return false
        }
    }
    return true;
};
