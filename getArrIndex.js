//找出元素 item 在给定数组 arr 中的位置

function indexOf1(arr, item) {
    for(var i = 0,len = arr.length; i < len; i++){
        if(arr[i] == item){
            return i
        }
    }
    return -1;
}

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