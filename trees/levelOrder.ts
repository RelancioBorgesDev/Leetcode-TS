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

function levelOrder(root: TreeNode | null): number[][] {
  if (root == null) {
    return [];
  }

  let ans: number[][] = [];
  let queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length) {
    let size = queue.length;
    let newArr: number[] = [];

    for (let i = 0; i < size; i++) {
      let node: TreeNode = queue.shift()!;
      newArr.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    ans.push(newArr);
  }

  return ans;
}
