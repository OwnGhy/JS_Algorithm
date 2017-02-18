//生成指定长度的随机字符串
function randomStr(n) {
    var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var temp = '',
        len = str.length;
    for(var i = 0 ; i < n ; i++){
        temp += str.charAt(Math.floor(Math.random()*len));
    }
    return temp;
}
console.log(randomStr(8));