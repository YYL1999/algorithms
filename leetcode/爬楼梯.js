/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
/**
 * 标签：动态规划
 *   本问题其实常规解法可以分成多个子问题，爬第n阶楼梯的方法数量，等于 2 部分之和
 *   爬上 n-1n−1 阶楼梯的方法数量。因为再爬1阶就能到第n阶
 *  爬上 n-2n−2 阶楼梯的方法数量，因为再爬2阶就能到第n阶
 *  所以我们得到公式 dp[n] = dp[n-1] + dp[n-2]dp[n]=dp[n−1]+dp[n−2]
 *  同时需要初始化 dp[0]=1dp[0]=1 和 dp[1]=1dp[1]=1
 *   时间复杂度：O(n)O(n)
 */