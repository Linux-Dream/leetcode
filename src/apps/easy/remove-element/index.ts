function removeElement(nums: (number | string)[], val: number): number {
    let replaceIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = '_';
        } else {
            nums[replaceIndex] = nums[i];
            if (replaceIndex !== i) nums[i] = '_';
            replaceIndex++;
        }
    }
    return replaceIndex;
}

console.log(removeElement([3,2,2,3], 2));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
