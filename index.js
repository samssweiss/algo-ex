function traverse(n = 10) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
}

function traverse2(n = 10) {
  let j = 0
  while (j < n) {
    console.log(j)
    j++
  }
}

function traverseLeftRight(n = 10) {
  let isLeft = true
  let index1 = 0
  let index2 = n -1
  while (index1 <= index2) {
    if (isLeft) {
      console.log(index1)
      index1++
    } else {
      console.log(index2)
      index2--
    }
    isLeft = !isLeft
  }
}

function reverseTraverse(n = 10) {
  for (let i = n - 1; i >= 0; i--) {
    console.log(i)
  }
}

function reverseTraverse2(n = 10) {
  let j = n - 1
  while (j >= 0) {
    console.log(j)
    j--
  }
}



// traverse(10)
// traverse2(10)
// traverseLeftRight(10)

// reverseTraverse(10)
// reverseTraverse2(10)