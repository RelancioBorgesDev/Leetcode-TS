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

const values = [1, 2, 4];
const values2 = [1, 3, 4];
const list1 = createLinkedList(values);
const list2 = createLinkedList(values2);

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 == null) {
        return list2;
    }

    if (list2 == null) {
        return list1;
    }

    let mergedList: ListNode | null = null;
    let current: ListNode | null = null;

    while (list1 !== null && list2 !== null) {
        let smallerNode: ListNode;

        if (list1.val < list2.val) {
            smallerNode = list1;
            list1 = list1.next;
        } else {
            smallerNode = list2;
            list2 = list2.next;
        }

        if (mergedList === null) {
            mergedList = smallerNode;
            current = smallerNode;
        } else {
            current!.next = smallerNode;
            current = current!.next;
        }
    }

    if (list1 !== null) {
        if (mergedList === null) {
            mergedList = list1;
        } else {
            current!.next = list1;
        }
    }

    if (list2 !== null) {
        if (mergedList === null) {
            mergedList = list2;
        } else {
            current!.next = list2;
        }
    }

    return mergedList;
}


console.log(mergeTwoLists(list1, list2));
