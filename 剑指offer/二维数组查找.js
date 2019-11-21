function Find(target, array)
{
   var row=array.length,
        col=array[0].length,
        i=0,
        j=col-1;
    while(i<row&&j>=0){
        if(array[i][j]>target){
            j--;
            continue;
        }else if(array[i][j]<target){
            i++;
            continue;
        }else{
            return true;
        }
        return false;
    }
}