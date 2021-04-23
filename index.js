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
// reverseTraverse(10)
reverseTraverse2(10)