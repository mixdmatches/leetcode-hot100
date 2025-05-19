/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0;
  let length = nums.length;
  nums.forEach((item) => {
    if (item == 0) {
      count++;
    } else {
      return item != 0;
    }
  });
  for (let i = length - count; i < length; i++) {
    nums.push(0);
  }
  console.log(nums);
};
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums, "nums");
