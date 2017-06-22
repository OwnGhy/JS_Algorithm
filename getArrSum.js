//普通方法求数组的和
function sum(arr) {
    var sum = 0;
    for(var i = 0,len = arr.length; i < len; i++){
        sum += arr[i];
    }
    return sum;
}

//递归的方法求数组的和
function sum2(arr) {
    var len = arr.length;
    if(len == 0){
        return 0;
    } else if (len == 1){
        return arr[0];
    } else {
        return arr[0] + sum2(arr.slice(1));
    }
}

//函数式编程的方法求数组的和
function sum3(arr) {
    return arr.reduce(function(prev, curr, idx, arr){
        return prev + curr;
    });
}

//foreach方法
function sum4(arr) {
    var s = 0;
    arr.forEach(function(val, idx, arr) {
        s += val;
    }, 0);

    return s;
};

//eval方法
function sum5(arr) {
    eval(arr.join('+'))
}


