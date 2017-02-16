var arr = [1,2,4,2,5,1,4,3];
console.log(unique6(arr));
//方法一：遍历数组
//通过indexOf方法判断值是否在新数组中，如果返回-1，表示不在新数组中，插入新数组。
function unique1(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) == -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//方法二：对象键值法
//该方法执行速度比较快，但占用的内存较大
// 实现思路：新建js对象及新数组，遍历传入数组时，判断值是否为js对象的键，不是的话给对象新增该键并放入新数组。
// 注意点：判断是否为js对象键时，会自动对传入的键执行“toString()”，不同的键可能会被误认为一样；例如： a[1]、a["1"] 。
// 解决上述问题还是得调用“indexOf”。
function unique2(arr) {
    var newArr = [],
        newObj = {},
        len = arr.length,
        val,
        type;
    for(var i = 0; i < len; i++){
        val = arr[i];
        type = typeof val;
        if(!newObj[val]){
            newObj[val] = [type];
            newArr.push(val);
        }else if(newObj[val].indexOf(type) < 0){
            newObj[val].push(type);
            newArr.push(val);
        }
    }
    return newArr;
}

//方法三：数组下标判断法
//是方法一的优化，判断当前第i项第一次在数组中出现的位置是否是i，如果不是，表示已重复
function unique3(arr) {
    var newArr = [arr[0]];
    for(var i = 1; i < arr.length ; i++){
        if(arr.indexOf(arr[i]) == i){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//方法四：排序后相邻去除法
function unique4(arr) {
    arr.sort();
    var newArr = [arr[0]];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== newArr[newArr.length-1]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//方法五：优化遍历数组法
//该方法思路比较奇特，判断当前第i项值在i之后的数组中是否有重复，如果没有就插入新数组。
//例数组：1，2，4，2，5，1，4，3，那么该方法会从第3项的2开始插入数组，可以发现2在后续数组中不会出现。
function unique5(arr) {
    var newArr = [];
    for(var i = 0,len = arr.length; i < len ; i++){
        for(var j = i + 1 ; j < len ; j++){
            if(arr[i] == arr[j]){
                j = ++i;
            }
        }
        newArr.push(arr[i]);
    }
    return newArr;
}

//方法六：使用双层for循环,break
//自己后来相出的办法，思路简单
function unique6(arr) {
    var newArr = [];
    for(var i = 0,len = arr.length; i < len ; i++){
        var flag = true;
        for(var j = i + 1 ; j < len ; j++){
            if(arr[j] == arr[i]){
                flag = false;
                break;
            }
        }
        if(flag){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}