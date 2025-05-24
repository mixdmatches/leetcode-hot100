/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length;
  let result = new Array(nums.length);
  let pre = 1;
  let suf = 1;
  // 第一轮循环先处理前缀积
  for (let i = 0; i < nums.length; i++) {
    result[i] = pre;
    pre *= nums[i];
  }
  // 第二轮循环处理后缀积
  for (let j = n - 1; j >= 0; j--) {
    result[j] *= suf;
    suf *= nums[j];
  }
  return result;
};
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
