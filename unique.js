var arr = [1,2,4,2,5,1,4,3];
console.log(unique6(arr));
//方法一：遍历数组
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