var stack = [];
function push(node)
{
    stack.push(node);
}
function pop()
{
    return stack.length==0?null:stack.pop();
}
function top()
{
    return stack.length==0?null:stack[0];
}
function min()
{
    return Math.min.apply(this,stack);
}