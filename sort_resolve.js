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