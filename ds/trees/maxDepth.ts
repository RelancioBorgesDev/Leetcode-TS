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
const node5 = new TreeNode(7, null, null);
const node4 = new TreeNode(15, null, null);
const node3 = new TreeNode(20, node4, node5);
const node2 = new TreeNode(9, null, null);
const node1 = new TreeNode(3, node2, node3);

//       3
//      / \
//     9  20
//        / \
//       15  7

function maxDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
console.log(maxDepth(node1));
