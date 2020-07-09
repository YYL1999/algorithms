/**
 * @param {number} num
 * @return {string}
 * 贪心算法 从大到小匹配  一个肯定最多出现一次
 */
var intToRoman = function(num) {
    let key = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let value = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let ans = ''
    for(let i =0;i< key.length; i++) {
      while(num >= key[i]) {
        ans += value[i];
        num -= key[i];
      }
    }
    return ans;
  };