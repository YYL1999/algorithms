function quickSort(arr,left,right){
    if (left===right) return 
    const key=partition(arr,left,right)
    if(left<key){
        quickSort(arr,left,key-1)
    }
    if(right>key){
        quickSort(arr,key+1,right)
    }
}
function partition (arr,left,right) {
  const key=arr[left]
  while(left<right){
      while(key<=arr[right] && left<right){
        right--
      }
      [arr[left], arr[right]] = [arr[right], arr[left]]; // 交换
      while (key >= arr[left] && left < right) {
        // 如果key大于a[left]，则left递增，继续比较
        left++;
      }
      [arr[left], arr[right]] = [arr[right], arr[left]]; // 交换
  }
  return left
}
var quickSort2 = function(arr) {
    　　if (arr.length <= 1) {//如果数组长度小于等于1无需判断直接返回即可 
            return arr;
        }
    　　var pivotIndex = Math.floor(arr.length / 2);//取基准点 
    　　var pivot = arr.splice(pivotIndex, 1)[0];//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数
    　　var left = [];//存放比基准点小的数组
    　　var right = [];//存放比基准点大的数组 
    　　for (var i = 0; i < arr.length; i++){ //遍历数组，进行判断分配 
    　　　　if (arr[i] < pivot) {
    　　　　　　left.push(arr[i]);//比基准点小的放在左边数组 
    　　　　} else {
    　　　　　　right.push(arr[i]);//比基准点大的放在右边数组 
    　　　　}
    　　}
             //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1； 
    　　return quickSort2(left).concat([pivot], quickSort2(right));
    }
const arr = [2, 3, 1, 4];
quickSort(arr, 0, 3);
console.log(arr);
console.log(quickSort2(arr))