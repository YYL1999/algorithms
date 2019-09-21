/**
 * 双指针 
 */
const isPalindrome=(num)=>{
    num=num.toString()
    let l=0,
    r=num.length-1
    while(l<=r){
      if(num[l]!==num[r]){
          return false
      }else{
          l++
          r--
      }
    }
    return true
}
console.log(isPalindrome(222433422))