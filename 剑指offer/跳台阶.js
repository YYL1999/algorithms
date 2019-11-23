function jumpFloor(number)
{
    // write code here
    if(number<=2) return number
    var ans=[]
    ans[0]=1;
    ans[1]=2;
    for(let i=2;i<number;i++){
        ans[i]=ans[i-1]+ans[i-2]
    }
    return ans[number-1]
}

function jumpFloor(number)
{
    if (number < 2) {
        return 1
    }
    let arr = [1, 1]
    for (let i = 2; i <= number; i ++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[number]
}