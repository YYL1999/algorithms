/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits)return []
    let dic = {2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'}
    let res = []
    let arr  = []
    for (let i of digits){
        arr.push(dic[i])
    }
    
    let pi = function(str = '',index = 0){
        if(index === digits.length) res.push(str)
        else {
            for (let i of arr[index]){
                let temp = str + i
                pi(temp,index+1)
            }
        }
    }
    pi()

    return res
};