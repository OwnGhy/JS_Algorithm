/*
*平铺多维数组的方法
*/

function flattening(arr) {
    return JSON.parse("[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]");
}


function flattening2(arr) {
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
function flattening3 (arr) {
    return arr.concat.apply([],arr);
}
var arr = [1, [''], {}, [3, [[4], 5]]];
arr = flattening2(arr);
console.log(arr);//[1, "", Object, 3, 4, 5]


console.log(flattening3([1,[2,3],4]));//[1,2,3,4]