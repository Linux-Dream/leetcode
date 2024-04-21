function longestCommonPrefix(strs: string[]): string {
    let result = '';
    if (strs.length === 1) return strs[0];
    for (let i = 0; i < Number.MAX_VALUE; i++) {
        let temp = '';
        let isAllSame = true;
        for (let j = 0; j < strs.length; j++) {
            const char = strs[j][i];
            if (!char) {
                isAllSame = false;
                break;
            }
            if (!temp) {
                temp = char;
                continue;
            }
            if (temp !== char) {
                isAllSame = false;
                break;
            }
            if (j === strs.length - 1) {
                result += char;
            }
        }
        if (!isAllSame) break;
    }
    return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["a"]));
