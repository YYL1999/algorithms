function rectCover(number)
{
    // write code here
    if(number<1) return 0
    if(number==1) return 1
    var ans=[]
    ans[0]=1;
    ans[1]=2;
    for(let i=2;i<number;i++){
        ans[i]=ans[i-1]+ans[i-2]
    }
    return ans[number-1]
}