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
traverse3_shim([1, 2, 7, 4, 8], (item) => {
  console.log(item);
});
// traverseLeftRight(10)

// reverseTraverse(10)
// reverseTraverse2(10)
