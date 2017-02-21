//    如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。
//    注意需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。

function palindrome(str) {
    astr=str.replace(/[^0-9A-Za-z]/g,'').toLowerCase();
    bstr=astr.split("").reverse().join("");
    if(astr===bstr){
        return true;
    }else{
        return false;
    }
}
console.log(palindrome("eye"));//true

//字符串翻转
//split方法把字符串转换成数组
//reverse方法翻转数组顺序
//join 方法来把数组转换成字符串
function reverseString(str) {
    str=str.split('').reverse().join('');
    return str;
}
reverseString("hello");//olleh