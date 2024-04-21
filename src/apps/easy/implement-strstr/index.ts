function strStr(haystack: string, needle: string): number {
    if (needle === '') return 0;
    if (haystack.length < needle.length) return -1;
    if (haystack.length === needle.length) return haystack === needle ? 0 : -1;
    let targetIndex = -1;
    for (let i = 0; i <= (haystack.length - needle.length); i++) {
        let findDifferent = false;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                findDifferent = true;
                break;
            }
        }
        if (!findDifferent) {
            targetIndex = i;
            break;
        }
    }
    return targetIndex;
}

// console.log(strStr('hello', 'll'), '2');
// console.log(strStr('aaaaa', 'bba'), '-1');
// console.log(strStr('aaaaa', ''), '0');
// console.log(strStr('a', 'a'), '0');
console.log(strStr('abc', 'c'), '2');
