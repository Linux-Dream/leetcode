function removeDuplicates(nums: (number | string)[]): number {
    if (nums.length === 1) return 1;
    let markIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[markIndex]) {
            markIndex++;
            nums[markIndex] = nums[i];
            if (markIndex === i) continue;
        }
        nums[i] = '_';
    }
    console.log(nums);
    return markIndex + 1;
}

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
