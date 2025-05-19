/**
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0;
  let set = new Set();
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    if (i != 0) {
      set.delete(s.charAt(i - 1));
    }
    while (right < s.length && !set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      right++;
    }
    res = Math.max(res, right - i);
  }
  return res;
};
function main() {
  console.log(lengthOfLongestSubstring("abcabcbb"));
}
main();
