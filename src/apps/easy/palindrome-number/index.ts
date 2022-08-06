function getSwapNumber(x: number): number {
    let temp = x;
    let swap = 0;
    while (temp) {
        swap = swap * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    return swap;
}

function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    return x === getSwapNumber(x);
};

console.log(isPalindrome(515351));
