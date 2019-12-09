function reOrderArray(array)
{
    // write code here
    let arr1=[],arr2=[]
    for(let i =0;i<array.length;i++){
        if(array[i]%2===0){
            arr2.push(array[i])
        }else{
            arr1.push(array[i])
        }
    }
    return [...arr1,...arr2]
}