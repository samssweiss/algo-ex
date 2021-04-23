# algo-ex
algo-ex


# leetcode | 1 two-sum | 两数之和 | easy
- https://leetcode-cn.com/problems/two-sum
- https://github.com/azl397985856/leetcode/blob/master/problems/1.two-sum.md
- https://github.com/azl397985856/leetcode/blob/master/problems/1.two-sum.en.md
``` js
// Map + 一个循环 for
```


# leetcode | 2 add-two-numbers | 两数相加 | mid
- https://leetcode-cn.com/problems/add-two-numbers/
- https://leetcode-cn.com/problems/add-two-numbers/solution/liang-shu-xiang-jia-by-leetcode-solution/

``` js
// singly-linked + while 一个循环
// 时间复杂度：O(\max(m,n))O(max(m,n))，其中 mm 和 nn 分别为两个链表的长度。我们要遍历两个链表的全部位置，而处理每个位置只需要 O(1)O(1) 的时间。
// 空间复杂度：O(1)O(1)。注意返回值不计入空间复杂度。
```



# leetcode | 3 longest-substring-without-repeating-characters | 无重复字符的最长子串 | mid
- https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
- https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/wu-zhong-fu-zi-fu-de-zui-chang-zi-chuan-by-leetc-2/
``` js
两面墙，前行，中间有个记录最大结果的

// 时间复杂度：O(N)O(N)，其中 NN 是字符串的长度。左指针和右指针分别会遍历整个字符串一次。
// 空间复杂度：O(|\Sigma|)O(∣Σ∣)，其中 \SigmaΣ 表示字符集（即字符串中可以出现的字符），|\Sigma|∣Σ∣ 表示字符集的大小。在本题中没有明确说明字符集，因此可以默认为所有 ASCII 码在 [0, 128)[0,128) 内的字符，即 |\Sigma| = 128∣Σ∣=128。我们需要用到哈希集合来存储出现过的字符，而字符最多有 |\Sigma|∣Σ∣ 个，因此空间复杂度为 O(|\Sigma|)O(∣Σ∣)。
```



# leetcode | 5 longest-palindromic-substring | 最长回文子串 | mid
- https://leetcode-cn.com/problems/longest-palindromic-substring/
- https://github.com/azl397985856/leetcode/blob/master/problems/5.longest-palindromic-substring.md
``` js
// 时间复杂度：O(n^2)，其中 nn 是字符串的长度。动态规划的状态总数为 O(n^2)，对于每个状态，我们需要转移的时间为 O(1)。
// 空间复杂度：O(n^2)，即存储动态规划状态需要的空间。

```



# leetcode | 5 xxxxx | xxxx | mid
- 
``` js
```
