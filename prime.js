//判断是否是素数
function isPrime(num) {
    if (num == 1) {
        return false;
    } else if (num == 2) {
        return true;
    } else if(num % 2 === 0){
        return false;
    }
    var len = Math.sqrt(num);
    for (var i = 3; i <= len; i++) {
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

//计算0-n之间的素数个数，并打印这些素数。
function prime(n) {
    var arr = [2];
    for(var i = 3; i <= n; i++){
        if(isPrime(i)){
            arr.push(i);
        }
    }
    return arr;
}

//计算n-m间的素数个数，并打印
function primeBetween(n,m) {
    if(n < 2){
        var arr = [2],
            i = 3;
    }else {
        var arr = [],
            i = n;
    }
    for(; i <= m; i++){
        if(isPrime(i)){
            arr.push(i);
        }
    }
    return arr;
}

console.log(isPrime2(47));
console.log(prime(100));
console.log(primeBetween(2,20));

//还有一种奇葩的判断方法，不是很懂原理，先放这里吧。
function isPrime2(num){
    return !/^.?$|^(..+?)\1+$/.test(Array(num + 1).join('1'))
}