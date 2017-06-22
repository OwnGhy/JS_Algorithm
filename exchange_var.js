//使用临时变量
function use_temp(a, b) {
    var temp = a;
    a = b;
    b = temp;
}

//使用加法
function use_add(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
}

//使用减法
function use_sub(a, b) {
    a = a - b;
    b = a + b;
    a = b - a;
}

//使用位操作符,异或^
//a = a ^ b;
function use_bit(a, b) {
    a ^= b;
    b ^= a;
    a ^= b;
}

//利用运算符的优先级
//首先使数组的第一项等于b，再执行b=a，将赋值为a的b为数组的第二项，然后使a等于数组的第一项
function use_priority(a, b) {
    a = [b, b = a][0];
}

//使用es6
//利用了ES6的解构赋值语法，它允许我们提取数组和对象的值，对变量进行赋值
function use_es6(a, b) {
    [a, b] = [b, a];
}

//交换数组的两项的元素
function use_splice(arr) {
    arr[0] = arr.splice(2,1,arr[0])[0];
}