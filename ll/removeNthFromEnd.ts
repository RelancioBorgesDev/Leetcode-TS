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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head == null) {
    return head;
  }

  let phead: ListNode = head;

  let slow: ListNode = phead;
  let fast: ListNode | null = phead;

  for (let i = 1; i <= n + 1; i++) {
    if (fast === null) {
      return head;
    }
    fast = fast.next;
  }

  while (fast !== null) {
    slow = slow.next!;
    fast = fast.next;
  }

  slow.next = slow.next!.next;

  return null;
}

removeNthFromEnd(head, 2);
