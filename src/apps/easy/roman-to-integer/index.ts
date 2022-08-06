const commonNumberMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
const specialNumberMap: Record<string, number> = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
};
const romanToInt = function (s: string): number {
    let number = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const specialNumber = specialNumberMap[`${s[i - 1]}${s[i]}`];
        if (specialNumber) {
            number += specialNumber;
            i--;
            continue;
        }
        number += commonNumberMap[s[i]];
    }
    return number;
};

console.log(romanToInt('III') === 3);
console.log(romanToInt('DCXXI') === 621);
console.log(romanToInt('LVIII') === 58);
console.log(romanToInt('MCMXCIV') === 1994);
