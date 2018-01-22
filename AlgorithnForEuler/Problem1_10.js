// 第一题 求n以下的数中为3或5的倍数的和
function get3and5Sum (n) {
    let res = 0
    for (var i = 1; i < n; i++) {
        if (i%3 === 0 || i%5 === 0) {
            res += i
        }
    }
    return res
}

// 第二题 求斐波那契数列项小于n的数列中偶数项的和
function findFibonacciSmallThanN (n) {
    let res = 0,
        first = 1,
        second = 2;
    while (second < n) {
        if (first%2 === 0) {
            res += first
        }
        let temp = first
        first = second
        second = first + temp
    }
    return res + (first%2 === 0 ? first : 0)
}

// 第三题 求n的最大质数因子
function maxPrimeFactor(n) {
    var pf = 1; // 最大质因数

    for (var i = 2; n > 1; ++i) {
        // 如果 n 能被 i 整除
        // 说明此时最大的质因数是 i
        if (n % i == 0) {
            n /= i;
            pf = i;

            // 循环用 n 除以 i，直到不能除尽为止
            // 保证了 i 是一个质数
            while (n % i == 0) {
                n /= i;
            }
        }
    }

    return pf;
}