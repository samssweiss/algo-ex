
// 关键是带上chain 和 带上深度
export function traverseTree(
  treeArray: any[] = [],
  onTraverse = (current, parent_chain, depth) => {},
  key = 'children'
) {
  if (!Array.isArray(treeArray) || !treeArray.length) return;
  function internalTraverse(treeArray_, parent_chain_, depth) {
    for (const item of treeArray_) {
      if (item[key] && Array.isArray(item[key]) && item[key].length) {
        internalTraverse(item[key], [...parent_chain_, item], depth + 1);
      }
      onTraverse(item, parent_chain_, depth);
    }
  }
  internalTraverse(treeArray, [], 1);
}

