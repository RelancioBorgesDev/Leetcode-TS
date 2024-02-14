class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function createLinkedList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let current: ListNode | null = null;

  for (const value of values) {
    const newNode = new ListNode(value);
    if (!head) {
      head = newNode;
      current = newNode;
    } else {
      current!.next = newNode;
      current = newNode;
    }
  }

  return head;
}

const values = [1, 2, 3, 4, 5];
const head = createLinkedList(values);

function hasCycle(head: ListNode | null): boolean {
  if (head == null) {
    return false;
  }
  let slow = head;
  let fast = head.next!;

  while (slow != fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next!;
    fast = fast.next!.next!;
  }

  return true;
}

console.log(hasCycle(head));
