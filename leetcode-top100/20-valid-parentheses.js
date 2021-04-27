/**
 * 
20-有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。



 * 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let valid = true;
  const stack = [];
  const mapper = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let i in s) {
    const v = s[i];
    if (["(", "[", "{"].indexOf(v) > -1) { // 判断只有左边的括号才push 进去
      stack.push(v);
    } else {
      const peak = stack.pop();
      if (v !== mapper[peak]) {
        return false;
      }
    }
  }
  if (stack.length > 0) return false;
  return valid;
};
