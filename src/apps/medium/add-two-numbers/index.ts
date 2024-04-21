type INodeForATN = ListNodeForATN | null;

class ListNodeForATN {
    val: number
    next: INodeForATN

    constructor(val?: number, next?: INodeForATN) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbersLoop(l1: INodeForATN, l2: INodeForATN, needCarry: boolean): INodeForATN {
    if (!l1 && !l2) return null;
    const value = (l1?.val || 0) + (l2?.val || 0);
    const finalValue = needCarry ? value + 1 : value;
    const node = new ListNodeForATN();
    if (finalValue >= 10) {
        node.val = finalValue - 10;
        node.next = addTwoNumbersLoop(l1 ? l1.next : null, l2 ? l2.next : null, true);
        if (!l1?.next && !l2?.next) node.next = new ListNodeForATN(1, null);
    } else {
        node.val = finalValue;
        node.next = addTwoNumbersLoop(l1 ? l1.next : null, l2 ? l2.next : null, false);
    }
    return node;
}

function addTwoNumbers(l1: INodeForATN, l2: INodeForATN): INodeForATN {
    return addTwoNumbersLoop(l1, l2, false);
}

function TestForATN() {
// const l1 = new ListNodeForATN(2, new ListNodeForATN(4, new ListNodeForATN(3, null)));
// const l2 = new ListNodeForATN(5, new ListNodeForATN(6, new ListNodeForATN(4, null)));
// console.log(addTwoNumbers(l1, l2), [7, 0, 8]);
// const l1 = new ListNodeForATN(0, null);
// const l2 = new ListNodeForATN(0, null);
// console.log(addTwoNumbers(l1, l2), [0]);
    const l1 = new ListNodeForATN(9, new ListNodeForATN(9, new ListNodeForATN(9, new ListNodeForATN(9, new ListNodeForATN(9, new ListNodeForATN(9, new ListNodeForATN(9, null)))))));
    const l2 = new ListNodeForATN(9, new ListNodeForATN(9, new ListNodeForATN(9, new ListNodeForATN(9, null))));
    let result = addTwoNumbers(l1, l2);
    const printArray = [];
    while (result) {
        printArray.push(result.val);
        result = result.next;
    }
    console.log(printArray, [8, 9, 9, 9, 0, 0, 0, 1]);
}

TestForATN();
