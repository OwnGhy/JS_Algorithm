function count_most_char(str) {
    if(str.length <= 1){
        return str;
    }
    let charObj = {};
    for(let i = 0; i < str.length; i++){
        if(!charObj[str.charAt(i)]){
            charObj[str.charAt(i)] = 1;
        }else {
            charObj[str.charAt(i)] += 1;
        }
    }

    let charMax = '',
        maxValue = 1;
    for(var key in charObj){
        if(maxValue < charObj[key]){
            charMax = key;
            maxValue = charObj[key];
        }
    }
    return charMax;
}
