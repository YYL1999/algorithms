public int findLengthOfLCIS(int[] nums) {
    if (nums==null||nums.length==0) return 0;
    int max = 1;
    int preLen = 1;
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            ++preLen;
            if (preLen>max) max = preLen;
        } else {
            preLen = 1;
        }
    }
    return max;
}
