type INodeForMTSL = ListNodeForMTSL | null;

class ListNodeForMTSL {
    val: number
    next: INodeForMTSL

    constructor(val?: number, next?: INodeForMTSL) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: INodeForMTSL, list2: INodeForMTSL): INodeForMTSL {
    if (list1 === null && list2 === null) return null;
    const targetList = new ListNodeForMTSL();
    let tempList = targetList;
    while (list1 || list2) {
        if (list1 === null || list2 === null) {
            tempList.val = list1?.val === undefined ? list2?.val! : list1?.val!;
            list1 = list1?.next || null;
            list2 = list2?.next || null;
        } else {
            if (list1.val >= list2.val) {
                tempList.val = list2.val;
                list2 = list2?.next || null;
            } else {
                tempList.val = list1.val;
                list1 = list1?.next || null;
            }
        }
        if (list1 || list2) {
            tempList.next = new ListNodeForMTSL();
            tempList = tempList.next;
        }
    }
    return targetList;
}

function TestForMTSL() {
    const l1 = new ListNodeForMTSL(1, new ListNodeForMTSL(2, new ListNodeForMTSL(4, null)));
    const l2 = new ListNodeForMTSL(1, new ListNodeForMTSL(3, new ListNodeForMTSL(4, null)));
    // const l1 = null;
    // const l2 = null;
    // const l1 = null;
    // const l2 = new ListNodeForMTSL();
    // const l1 = new ListNodeForMTSL(-9, new ListNodeForMTSL(3, null));
    // const l2 = new ListNodeForMTSL(5, new ListNodeForMTSL(7, null));
    let result = mergeTwoLists(l1, l2);
    const printArray = [];
    while (result) {
        printArray.push(result.val);
        result = result.next;
    }
    // console.log(printArray, [1, 1, 2, 3, 4, 4]);
    // console.log(printArray, []);
    // console.log(printArray, [0]);
    console.log(printArray, [-9, 3, 5, 7]);
}

TestForMTSL();
