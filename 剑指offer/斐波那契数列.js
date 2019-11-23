function Fibonacci(n)
{
  if (n == 0) {
    return 0;
  }
  var pre = 0, // 前一个值
    cur = 1; // 当前值
  for (var i = 2; i <= n; i++) { // 更新两个值
    cur += pre;
    pre = cur - pre;
  }
  return cur;
}