/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    return nums1.map(cur => {
        let t = nums2.indexOf(cur) //获取nums1中的当前值（cur）在nums2中位置
        for (t, len = nums2.length; t < len; t++){ //循环nums2，从t位置开始
            if (nums2[t] > cur){ //如果t位置 右侧有比cur大的值  就返回；如果此for循环完之后没有发现比cur更大的值，则返回-1
                return nums2[t]
            }
        }
        return -1
    })
};
