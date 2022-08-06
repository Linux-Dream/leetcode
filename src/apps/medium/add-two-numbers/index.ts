class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbersLoop(l1: ListNode | null, l2: ListNode | null, needCarry: boolean): ListNode | null {
    if (!l1 && !l2) return null;
    const value = (l1?.val || 0) + (l2?.val || 0);
    const finalValue = needCarry ? value + 1 : value;
    const node = new ListNode();
    if (finalValue >= 10) {
        node.val = finalValue - 10;
        node.next = addTwoNumbersLoop(l1 ? l1.next : null, l2 ? l2.next : null, true);
        if (!l1?.next && !l2?.next) node.next = new ListNode(1, null);
    } else {
        node.val = finalValue;
        node.next = addTwoNumbersLoop(l1 ? l1.next : null, l2 ? l2.next : null, false);
    }
    return node;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return addTwoNumbersLoop(l1, l2, false);
}

// const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));
// console.log(addTwoNumbers(l1, l2), [7, 0, 8]);
// const l1 = new ListNode(0, null);
// const l2 = new ListNode(0, null);
// console.log(addTwoNumbers(l1, l2), [0]);
const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null)))))));
const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))));
let result = addTwoNumbers(l1, l2);
const printArray = [];
while (result) {
    printArray.push(result.val);
    result = result.next;
}
console.log(printArray, [8, 9, 9, 9, 0, 0, 0, 1]);
