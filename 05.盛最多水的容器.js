/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxRongl = 0;
  let left = 0;
  let right = height.length - 1;
  // 容量 = Math.min(height[left],height[right]) * (right-left)
  while (left < right) {
    let currentRongl = Math.min(height[left], height[right]) * (right - left);
    maxRongl = Math.max(currentRongl, maxRongl);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  } `  +
   `
  return maxRongl;
};
function main() {
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
}
main();
