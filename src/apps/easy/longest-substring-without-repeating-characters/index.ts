function lengthOfLongestSubstring(s: string): number {
    const characters = [];
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        const charIndex = characters.indexOf(s[i]);
        if (charIndex === -1) {
            characters.push(s[i]);
            continue;
        }
        maxLength = characters.length > maxLength ? characters.length : maxLength;
        characters.splice(0, charIndex + 1);
        characters.push(s[i]);
    }
    return characters.length > maxLength ? characters.length : maxLength;
};

console.log(lengthOfLongestSubstring('aaa'));
console.log(lengthOfLongestSubstring('aaab'));
console.log(lengthOfLongestSubstring('aaacbc'));
