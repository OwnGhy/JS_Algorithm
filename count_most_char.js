//找出字符串中出现次数最多的字符
function count_most_char(str) {
    if(str.length <= 1){
        return str;
    }
    var charObj = {};
    for(var i = 0; i < str.length; i++){
        if(!charObj[str.charAt(i)]){
            charObj[str.charAt(i)] = 1;
        }else {
            charObj[str.charAt(i)] += 1;
        }
    }

    var charMax = '',
        maxValue = 1;
    for(var key in charObj){
        if(maxValue < charObj[key]){
            charMax = key;
            maxValue = charObj[key];
        }
    }
    return charMax;
}