var a={
    val:1,
    left:{
        val:2,
        left:null,
        right:{
            val:3,
            left:null,
            right:null 
        }
    },
    right:{
        val:3,
        left:null,
        right:null 
    }
}

function findpath(head,target){
    if(head ===null){
        return false
    }
    const x=target-head.val
    if(head.left ===null && head.right===null && x===0){
        return true
    }
    return findpath(head.left,x) || findpath(head.right,x)
}

console.log(findpath(a,6))