var twoSum = function(nums, target) {
    let res = {}
    for (let i = 0; i < nums.length; i++) { // 每个人报出自己想要配对的人
      if (res[nums[i]] !== undefined) { // 如果有人被登记过
        return [nums[i], res[nums[i]]] // 就是他
      } else {  // 否则
        res[target - nums[i]] = nums[i] // 主持人记住他的需求
      }
    }
  }
