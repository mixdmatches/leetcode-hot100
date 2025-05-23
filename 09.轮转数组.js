/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let l = nums.length;
  let newArr = new Array(l);
  for (let i = 0; i < l; i++) {
    newArr[(i + k) % l] = nums[i];
  }
  for (let i = 0; i < l; i++) {
    nums[i] = newArr[i];
  }
  console.log(nums);
};
rotate([1, 2, 3, 4, 5, 6, 7], 3);
