function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length===1) return 0
    var min=rotateArray[0];
    for(let i=0;i<rotateArray.length;i++){
        if(min>rotateArray[i]) min=rotateArray[i]
    }
    return min
}

function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length===0) return 0
    var left=0;
    var right=rotateArray.length-1
    while(left<right){
        if (rotateArray[left]<rotateArray[right]) return rotateArray[left]
        var mid=left+(right-left)/2
        if(rotateArray[left]<rotateArray[mid]){
            left=mid+1
        }else if(rotateArray[mid]<rotateArray[right]){
            right=mid
        }else{
            ++left
        }
    }
    return rotateArray[left]
}