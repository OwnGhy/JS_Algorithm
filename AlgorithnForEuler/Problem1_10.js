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

// 第四题 求两个三位数相乘得到的最大的回文
function getBiggestPalindromeOfThree(start, end) {
    let res = 0
    for (var i = start; i > end; i--) {
        for (var j = start; j > end; j--) {
            let temp = i * j
            if (isPalindrome(temp) && temp > res) {
                res = temp
            }
        }
    }
    return res
}
// 判断n是否为回文
function isPalindrome (n) {
    let temp = JSON.stringify(n).split('')
    let s = 0;
    let e = temp.length - 1;
    while (s < e) {
        if (temp[s] !== temp[e]) {
            return false
        }
        s++;
        e--;
    }
    return true
}

// 第五题 求能整出1-n的最小数
function smallestFrom1TonWithoutRemainder (n) {
    let res = false
    let start = 20
    while(!res) {
        let temp = true
        for (var i = 2; i < n; i++) {
            if (start%i) {
                temp = false
                break
            }
        }
        if (temp) {
            res = start
        }
        start++
    }
    return res
}

// 第六题 求1-n之间的自然数的平方的和与1-n之间自然数的和的平方的差值
function getNSquereMinusNsumSquere(n) {
    let res1 = 0;
    let res2 = 0;
    for (var i = 1; i <= n; i++) {
        res1 += i * i
        res2 += i
    }
    return res2 * res2 - res1
}

// 第七题 求第n个质数
function getTheNPrime(n) {
    let res = 2
    let step = 2;
    let num = 0;
    while(num < n) {
        if (isPrime(step)) {
            res = step
            num++
        }
        step++
    }
    return res 
}

function isPrime(n) {
    let res = true
    for (var i = 2; i < n; i++) {
        if (n%i == 0) {
            res = false
            break
        }
    }
    return res
}