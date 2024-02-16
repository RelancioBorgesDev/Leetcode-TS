class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const node3 = new TreeNode(3, null, null);
const node2 = new TreeNode(1, null, null);
const node1 = new TreeNode(2, node2, node3);

//       2
//      / \
//     1   3
//

function isValidBST(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  let prev: TreeNode | null = null;
  let curr = root;
  const stack: TreeNode[] = [];

  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left!;
    }
    curr = stack.pop()!;
    if (prev !== null && curr.val <= prev.val) {
      return false;
    }
    prev = curr;
    curr = curr.right!;
  }

  return true;
}
console.log(isValidBST(node1));
