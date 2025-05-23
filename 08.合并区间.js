/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let ans = [];
  let count = 0;
  for (const p of intervals) {
    const m = ans.length;
    count++;
    if (m && p[0] <= ans[m - 1][1]) {
      // 可以合并
      ans[m - 1][1] = Math.max(ans[m - 1][1], p[1]); // 更新右端点最大值
    } else {
      // 不相交，无法合并
      ans.push(p); // 新的合并区间
    }
  }
  return ans;
};
let intervals1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals1));
let intervals2 = [
  [1, 4],
  [4, 5],
];
console.log(merge(intervals2));
