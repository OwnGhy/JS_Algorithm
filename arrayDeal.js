/**
 * 数组的处理方法
 */

/**
* 1.嵌套多层的数组平铺的方法
*/
var list1 = [[0, 1], [2, 3], [4, 5]];
function flatten(arr) {
    return arr.reduce(function (acc,val) {
        return acc.concat(Array.isArray(val) ? flatten(val) : val);
    },[]);
}
//数组平铺处理的ES6语法
//     const flatten = arr => arr.reduce(
//         (acc, val) => acc.concat(
//         Array.isArray(val) ? flatten(val) : val
//     ),
//         []
//     );

function flatten2(arr) {
    return JSON.parse("[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]");
}

function flatten3(arr) {
    var newArr = [];
    if (arr instanceof Array) {
        arr.forEach(function (value) {
            newArr = newArr.concat(flattening2(value));
        });
    } else {
        newArr.push(arr);
    }
    return newArr;
}

//该方法不能解决对象情况
function flatten4 (arr) {
    return arr.concat.apply([],arr);
}

// -------------------------------------------------分割线-------------------------------------------------
/**
 * 2.移除数组 arr 中的所有值与 item 相等的元素。
 */
// 常规方法
function remove1(arr, item) {
    var newArr = [];
    for(var i = 0,len = arr.length; i < len ;i++){
        if(arr[i] != item){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//过滤方法
function remove2(arr,item) {
    return arr.filter(function (x) {
        return x !== item;
    });
}

//借用splice方法
function remove3(arr,item){
    var newarr = arr.slice(0);
    for(var i=0;i<newarr.length;i++){
        if(newarr[i] == item){
            newarr.splice(i,1);
            i--;
        }
    }
    return newarr;
}


// -------------------------------------------------分割线-------------------------------------------------
/**
 * 3.求数组的和
 */
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
    return eval(arr.join('+'))
}

// -------------------------------------------------分割线-------------------------------------------------
/**
 * 4.交换数组的两项
 */
// 借用splice方法实现，splice方法会返回删除项组成的数组
function use_splice(arr,i,j) {
    arr[i] = arr.splice(j,1,arr[i])[0];
}

//常规方法
function use_normal(arr,i,j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// -------------------------------------------------分割线-------------------------------------------------
/**
 * 5.找出元素 item 在给定数组 arr 中的位置
 */
//常规方法
function indexOf1(arr, item) {
    for(var i = 0,len = arr.length; i < len; i++){
        if(arr[i] == item){
            return i
        }
    }
    return -1;
}
// 借用indexOf方法
function indexOf2(arr, item) {
    if (Array.prototype.indexOf){
        return arr.indexOf(item);
    } else {
        for (var i = 0; i < arr.length; i++){
            if (arr[i] === item){
                return i;
            }
        }
    }
    return -1;
}
// -------------------------------------------------分割线-------------------------------------------------
/**
 * 6.数组乱序
 * @type {[*]}
 */
function shuffle(arr) {
    var a = arr.slice(0);
    for(var j, x, i = a.length; i; j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
    return a;
}

function shuffle2(arr) {
    var result = [],
        //Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
        arrTemp = Object.assign([],arr);
    for(var i = 0, len = arrTemp.length; i < len ; i++){
        result.push(arrTemp.splice(Math.floor(Math.random()*arrTemp.length),1)[0]);
    }
    return result;
}

// -------------------------------------------------分割线-------------------------------------------------
/**
 * 7. 数组排序方法sort解决
 */
var arr = [1,3,2,54,6,19];
console.log(arr.sort());//1,19,2,3,54,6
//可以发现得到的结果是错误的，这就是因为sort排序是按照字符编码来排序的。

console.log(arr.sort(function (a,b) {
    return a-b;
}));//1,2,3,6,19,54

//    关于对象，如何实现依据数组的某一项实现排序。
var obj = [
    {
        name:'ghy',
        age:'20'
    },
    {
        name:'mzh',
        age:'21'
    },
    {
        name:'zs',
        age:'10'
    }
];
function compare(propertyName) {
    return function (obj1,obj2) {
        var value1 = obj1[propertyName];
        var value2 = obj2[propertyName];

        if(value1 < value2){
            return -1;
        }else if(value1 > value2){
            return 1;
        }else{
            return 0;
        }
    }
}
obj.sort(compare("name"));
console.log(obj[0].name);//ghy

obj.sort(compare("age"));
console.log(obj[0].name);//zs


// -------------------------------------------------分割线-------------------------------------------------
/**
 * 8.数组排序
 * @type {[*]}
 */
//冒泡排序
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//冒泡排序改进，使用pos记录下标
//设置一标志性变量pos,用于记录每趟排序中最后一次进行交换的位置。
// 由于pos位置之后的记录均已交换到位,故在进行下一趟排序时只要扫描到pos位置即可。
function bubbleSort2(arr) {
    var len = arr.length,
        i = len - 1;
    while(i>0) {
        var pos = 0;
        for (var j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]){
                pos = j;
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i = pos;
    }
}

//冒泡改进
//每趟排序中进行正向和反向两遍冒泡的方法一次可以得到两个最终值(最大者和最小者) , 从而使排序趟数几乎减少了一半
function bubbleSort3(arr) {
   var low = 0,
       high = arr.length - 1,
       temp = arr[low]
       ,j;
   while(low < high){
       for(j = low; j < high; j++){
           if(arr[j] > arr[j+1]){
               temp = arr[j+1];
               arr[j+1] = arr[j];
               arr[j] = temp;
           }
       }
       --high;
       for(j = high; j > low; j --){
           if(arr[j] > arr[j-1]){
               temp = arr[j];
               arr[j] = arr[j-1];
               arr[j-1] = temp;
           }
       }
       ++low;
   }
}

//选择排序
function selectSort(arr) {
    var len = arr.length;
    for(var i = 0; i < len; i++){
        var min = i;
        for(var j = i + 1; j < len; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min != i){
            var temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
}

//插入排序
//工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
function insertSort(arr) {
    var len = arr.length;
    for(var i = 0; i < len - 1; i++){
        var insert = arr[i+1],
            index = i+1;
        for(var j = i; j >= 0 ; j--){
            if(insert < arr[j]){
                arr[j+1] = arr[j]
                index = j;
            }
        }
        arr[index] = insert;
    }

}

//希尔排序
function shellSort(arr) {
    var len = arr.length;
    var gap = Math.round(len/2);
    while (gap > 0){
        for(var i = gap; i < len ; i++){
            var insert = arr[i];
            var index = i;
            for(var j = i; j >= 0; j -= gap){
                if(insert < arr[j]){
                    arr[j+gap] = arr[j];
                    index = j;
                }
            }
            arr[index] = insert;
        }
        gap = Math.round(gap/2 - 0.1);
    }
}

//快速排序
//快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分
// 其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。
function quickSort(arr) {
    var len = arr.length;
    if(len <= 1){
        return arr;
    }else{
        var smaller = [];
        var bigger = [];
        var base = [arr[0]];
        for(var i = 1; i < len; i++){
            if(arr[i] <= base[0]){
                smaller.push(arr[i]);
            }else{
                bigger.push(arr[i]);
            }
        }
        return quickSort(smaller).concat(base.concat(quickSort(bigger)));
    }
}


//归并算法
//归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。归并排序是一种稳定的排序方法。
// 将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并
function MergeSort(array) {
    var length = array.length;
    if (length <= 1) {
        return array;
    } else {
        var num = Math.ceil(length/2);
        var left = MergeSort(array.slice(0, num));
        var right = MergeSort(array.slice(num, length));
        return merge(left, right);
    }
}
function merge(left, right) {
    var a = new Array();
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            var temp = left.shift();
            a.push(temp);
        } else {
            var temp = right.shift();
            a.push(temp);
        }
    }
    if (left.length > 0) {
        a = a.concat(left);
    }
    if (right.length > 0) {
        a = a.concat(right);
    }
    console.log(a);
    console.log("-----------------------------");
    return a;
}