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

//找到字符串中最大的单词的字数
function findLongest(str) {
    var newArr = str.toLowerCase().split(/[\ |\!|\;|\:|\"|\'|\,|\.|\?]/g);
    newArr.sort(function (a,b) {
        return b.length - a.length;
    });
    return newArr[0].length;
}

console.log(findLongest('abd dhdddsdkjjfskjdfh,ahjsd!kasjhda sjdhasdh sakjdh aksjdh'));//17

//将字符串每个单词的首字母大写
function firstUpperCase(str) {
    var newArr = str.toLowerCase().split(/[\ |\!|\;|\:|\"|\'|\,|\.|\?]/g);
    for(var i = 0; i < newArr.length; i++){
        newArr[i] = newArr[i][0].toUpperCase()+newArr[i].substring(1,newArr[i].length);
    }
    var newStr = newArr.join(" ");
    return newStr
}
console.log(firstUpperCase('hello world,today is a bad day.but have to stick on'));
//Hello World Today Is A Bad Day But Have To Stick On