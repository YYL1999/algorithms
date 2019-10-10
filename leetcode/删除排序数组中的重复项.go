func removeDuplicates(nums []int) int {
	for i:=1; i<len(nums); i++ {
        temp := nums[i-1] // 前一项与当前项进行对比
		if temp == nums[i] {
			nums = append(nums[:i],nums[i+1:]...)
            i-- // 继续用当前项对比，i保持不变，抵消掉循环中的i++，故此i--
        }
	}
	return len(nums)
}
