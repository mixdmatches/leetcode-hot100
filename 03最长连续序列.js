// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function (nums) {
//   let set = new Set();
//   for (let num of nums) {
//     set.add(num);
//   }
//   let longestStreak = 0;
//   for (const num of set) {
//     if (!set.has(num - 1)) {
//       let currentNum = num;
//       let currentStreak = 1;
//       while (set.has(currentNum + 1)) {
//         currentNum += 1;
//         currentStreak += 1;
//       }
//       longestStreak = Math.max(longestStreak, currentStreak);
//     }
//   }
//   return longestStreak
// };
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let resLength = 0;
  for (let item of nums) {
    if (!nums.includes(item - 1)) {
      let l = 1;
      let current = item;
      while (nums.includes(current + 1)) {
        current++;
        l++;
      }
      resLength = Math.max(resLength, l);
    }
  }
  return resLength;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
