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

const values = [1, 2];
const head = createLinkedList(values);

function reverseList(head: ListNode | null): ListNode | null {
  if (head == null) {
    return null;
  }
  let curr = head;
  let prev = null;

  while (curr != null) {
    let storeNextEl = curr.next;
    curr.next = prev;
    prev = curr;
    curr = storeNextEl!;
  }

  return prev;
}

console.log(reverseList(head));
