function traverse(n = 10) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function traverse2(n = 10) {
  let j = 0;
  while (j < n) {
    console.log(j);
    j++;
  }
}

function traverse3(arr, ontraserve) {
  if (!arr || !arr.length) return;
  const n = arr.length;
  let index = 0
  function internal(arr_, chain, depth) {
    if (index < n) {
      ontraserve(arr[index]);
      index++
      internal(arr_, [...chain, arr_[0]], depth + 1);
    }
  }
  internal(arr, [], 1);
}


function traverse3_shim(arr, ontraserve) {
  const n = arr.length
  let index = 0
  function internal() {
    if (index < n) {
      ontraserve(arr[index]);
      index++
      internal();
    }
  }
  internal();
}

function traverse4(arr, ontraserve) {
  let head = null
  let tail = null
  const n = arr.length
  for (let index = 0; index < n; index++) {
    if (index === 0) {
      head = arr[index]
      tail = head
    } else {
      console.log(tail) // 这里能拿到上次的
      tail = arr[index]
    }
  }
}

function traverseLeftRight(n = 10) {
  let isLeft = true;
  let index1 = 0;
  let index2 = n - 1;
  while (index1 <= index2) {
    if (isLeft) {
      console.log(index1);
      index1++;
    } else {
      console.log(index2);
      index2--;
    }
    isLeft = !isLeft;
  }
}

function reverseTraverse(n = 10) {
  for (let i = n - 1; i >= 0; i--) {
    console.log(i);
  }
}

function reverseTraverse2(n = 10) {
  let j = n - 1;
  while (j >= 0) {
    console.log(j);
    j--;
  }
}

// traverse(10)
// traverse2(10)
// traverse3_shim([1, 2, 7, 4, 8], (item) => {
//   console.log(item);
// });
// traverseLeftRight(10)

// reverseTraverse(10)
// reverseTraverse2(10)


const tree = [
  {
    val: 1,
    children: [
      {
        val: 11,
        children: null
      },
      {
        val: 12,
        children: [
          {
            val: 121,
            children: null
          }
        ]
      }
    ]
  },
  {
    val: 2,
    children: [
      {
        val: 22,
        children: null
      }
    ]
  }
]


function traverseTree___Depth_First_Search___DFS___recursive(tree) {
  function internal(arr) {
    for (const item of arr) {
      console.log(item.val)
      if (item.children) {
        internal(item.children)
      }
    }
  }
  internal(tree)
}

function traverseTree___Breadth_First_Search___BFS___recursive(params) {
  function internal(arr) {
    const stack = []
    for (const item of arr) {
      console.log(item.val)
      if (item.children) {
        stack.push(...item.children)
      }
    }
    if (stack.length) {
      internal(stack)
    }
  }
  internal(tree)
}

// console.log(traverseTree___Breadth_First_Search___BFS___recursive(tree))




const tree_binary = {
  val: 0,
  left: {
    val: 1,
    left: {
      val :11,
      left: {
        val: 111,
        left: null,
        right: null
      },
      right: {
        val :112,
        left: null,
        right: null
      }
    },
    right: {
      val: 12,
      left: {
        val: 121,
        left: null,
        right: null
      },
      right: {
        val: 122,
        left: null,
        right: null
      }
    }
  },
  right: {
    val:2,
    left: {
      val: 21,
      left: null,
      right: null
    },
    right: {
      val: 22,
      left: null,
      right: null
    }
  }
}

function traverseTree___Depth_First_Search___DFS___recursive___order(tree_binary) {
  function internal(_node) {
    // console.log(_node.val) // 1.前序遍历(Pre-Order Traversal) ：指先访问根，然后访问子树的遍历方式
    if (_node.left) {
      internal(_node.left)
    }
    // console.log(_node.val) // 3.中序遍历(In-Order Traversal)：指先访问左（右）子树，然后访问根，最后访问右（左）子树的遍历方式。 | 中序遍历一般是用二叉树实现：
    if (_node.right) {
      internal(_node.right)
    }
    // console.log(_node.val) // 2.后序遍历(Post-Order Traversal)：指先访问子树，然后访问根的遍历方式
  }
  internal(tree_binary)
}
console.log(traverseTree___Depth_First_Search___DFS___recursive___pre_order(tree_binary))

// tree 深度 广度遍历