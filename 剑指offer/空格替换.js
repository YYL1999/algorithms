// 正则表达式
function replaceSpace(str)
{
    return str.replace(/\s/g,'%20')
}
// 新开辟空间 
function replaceSpace(str)
{
    // write code here
    var newStr=str.split(" ")
    var s=""
    for(let i=0;i<newStr.length;i++){
        if(i!==newStr.length-1){
           s+=newStr[i]+"%20"
        }else{
            s+=newStr[i]
        }
    }
    return s
}