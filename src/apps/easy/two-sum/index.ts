function twoSum(nums: number[], target: number): number[] {
    const numberMap: Record<number, number> = {};
    let result: number[] = [];
    for (let index = 0; index < nums.length; index++) {
        const targetIndex = numberMap[nums[index]];
        if (targetIndex !== undefined) {
            result = [targetIndex, index];
            break;
        }
        numberMap[target - nums[index]] = index;
    }
    return result;
}

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);
