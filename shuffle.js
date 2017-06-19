var arr = [1,2,3,4,5,6,7];
function shuffle(arr) {
    var a = arr.slice(0);
    for(var j, x, i = a.length; i; j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
    return a;
}
console.log(shuffle(arr));

function shuffle2(arr) {
    var result = [],
        //Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
        arrTemp = Object.assign([],arr);
    for(var i = 0, len = arrTemp.length; i < len ; i++){
        result.push(arrTemp.splice(Math.floor(Math.random()*arrTemp.length),1)[0]);
    }
    return result;
}
console.log(shuffle2(arr));