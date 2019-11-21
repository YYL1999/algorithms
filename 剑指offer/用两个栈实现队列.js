let outStack = [];
let isStack = [];
function push(node)
{
    isStack.push(node);
}
function pop()
{
    if(!outStack.length){
        while(isStack.length){
            outStack.push(isStack.pop());
        }
    }
    return outStack.pop();
}