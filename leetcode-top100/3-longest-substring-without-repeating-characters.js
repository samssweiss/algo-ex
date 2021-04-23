/**
 * 
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const occ = new Set();
  const n = s.length;
  let rk = -1,
    ans = 0;
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function (s) {
  const set = new Set();
  const n = s.length;
  let j = 0,
    res = null;
  for (let i = 0; i < n; i++) {
    if (i !== 0) {
      set.delete(s.charAt(i - 1))
    }
    while (j < n && !set.has(s.charAt(j))) {
      set.add(s.charAt(j))
      j++
    }
    res = Math.max(res, j - n + 1)
  }
  return res;
};


