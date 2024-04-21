function searchInsert(nums: number[], target: number): number {
    if (!nums.length) return 0;
    if (nums.length === 1) {
        if (nums[0] === target) return 0;
        return nums[0] > target ? 0 : 1;
    }
    const mid = Math.floor(nums.length / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) return mid - searchInsert(nums.slice(0, mid), target);
    return mid + searchInsert(nums.slice(mid, nums.length), target);
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
