function isValid(s: string): boolean {
    let valid = true;
    const parentheseStack = [];
    const validParenthese = ['[', '{', '('];
    const validParentheseMap: Record<string, string> = {
        '[': ']',
        '{': '}',
        '(': ')'
    };
    for (let i = 0; i < s.length; i++) {
        if (validParenthese.indexOf(s[i]) !== -1) {
            parentheseStack.push(s[i]);
            continue;
        }
        const latestChar = parentheseStack[parentheseStack.length - 1];
        if (validParentheseMap[latestChar] === s[i]) {
            parentheseStack.pop();
            continue;
        } else {
            valid = false;
            break;
        }
    }
    if (parentheseStack.length) valid = false;
    return valid;
}

console.log(isValid('()') === true);
console.log(isValid('({[') === false);
console.log(isValid('()[]{}') === true);
console.log(isValid('(]') === false);
console.log(isValid('([)]') === false);
console.log(isValid('{[]}') === true);
