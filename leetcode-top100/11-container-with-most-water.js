/**
 * 
 * https://leetcode-cn.com/problem-list/2cktkvj/
 * https://leetcode-cn.com/problems/container-with-most-water/
 * 11. 盛最多水的容器
 * 
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器。


 * 
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (!height || height.length <= 1) return 0;

  let leftPos = 0;
  let rightPos = height.length - 1;
  let max = 0;
  while (leftPos < rightPos) {
    const currentArea =
      Math.abs(leftPos - rightPos) *
      Math.min(height[leftPos], height[rightPos]);
    if (currentArea > max) {
      max = currentArea;
    }
    if (height[leftPos] < height[rightPos]) {
      leftPos++;
    } else {
      rightPos--;
    }
  }

  return max;
};
