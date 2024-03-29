/**
 * 
 * https://leetcode-cn.com/problem-list/xb9nqhhg/
 * https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 * 剑指 Offer 40. 最小的k个数
 * 
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 * 
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
  return arr.sort((a,b) => a - b).slice(0, k)
};