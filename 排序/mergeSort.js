let mergeSort=(arr)=>{
    let len=arr.length
    if(arr.length===1){
        return arr
    }else {
        let mid=Math.floor(len/2),
        left=arr.slice(0,mid),
        right=arr.slice(mid)
        return mergeSort(mergeSort(left),mergeSort(right))
    }
}
function merge (left,right){
    const tmp = [];
    while (left.length && right.length) {
      // 合并左右数组
      if (left[0] < right[0]) tmp.push(left.shift());
      else tmp.push(right.shift());
    }
    return tmp.concat(left, right);
}