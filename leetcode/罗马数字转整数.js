/**
 * @param {string} s
 * @return {number}
 * 列举所有可能  挨个遍历  两个优先级大于一个  
 * i 手动控制大小
 */
var romanToInt = function(s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    };
    let ans = 0;
    for(let i =0;i<s.length;) {
        if(i+1<s.length && map[s.substring(i, i+2)]) {
          ans += map[s.substring(i, i+2)]
          i+=2;
        }else {
          ans += map[s.substring(i, i+1)]
          i+=1;
        }
    }
    return ans
  
  };