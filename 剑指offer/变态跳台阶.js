function jumpFloorII(number)
{
    // write code here
    if(number<=0) {
        return -1;
    }else if(number===1){
        return 1
    }else{
        return 2*jumpFloorII(number-1)
    }
    
}

function jumpFloorII(number)
{
    // write code here
    let i = 1;
    while(-- number) {
        i *= 2;
    }
    return i;
}