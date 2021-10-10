/**
 * https://leetcode-cn.com/problem-list/2cktkvj/
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * 17. 电话号码的字母组合
 * 
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。


 * 
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }
  const len = digits.length;
  const map = new Map();
  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");
  const result = [];

  function generate(i, str) {
    if (i == len) {
      result.push(str);
      return;
    }
    const tmp = map.get(digits[i]);
    for (let r = 0; r < tmp.length; r++) {
      generate(i + 1, str + tmp[r]);
    }
  }
  generate(0, "");
  return result;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations2 = function (digits) {
  if (!digits) {
    return [];
  }
  const len = digits.length;
  const map = new Map();
  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");
  const result = [];

  function fun1(str) {
    function internal(str_, chian, depth) {
      if (!str_) {
        if (depth !== 1) {
          result.push(chian.join(""));
        }
        return;
      }
      const temp = map.get(str_[0]);
      for (let i = 0; i < temp.length; i++) {
        internal(str_.slice(1), [...chian, temp[i]], depth + 1);
      }
    }
    internal(str, [], 1);
  }

  fun1(digits);
  return result;
};

console.log(letterCombinations2("23"));
