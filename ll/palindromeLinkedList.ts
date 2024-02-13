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

const values = [1, 2, 2, 1];
const head = createLinkedList(values);

function isPalindrome(head: ListNode | null): boolean {
    if (head === null) {
        return false;
    }

    let reversed: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr !== null) {
        reversed = new ListNode(curr.val, reversed);
        curr = curr.next;
    }

    let original: ListNode | null = head;

    while (original !== null && reversed !== null) {
        if (original.val !== reversed.val) {
            return false;
        }
        original = original.next;
        reversed = reversed.next;
    }

    return original === null && reversed === null;
}


console.log(isPalindrome(head));
