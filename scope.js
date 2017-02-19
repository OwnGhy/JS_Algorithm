// 第一种情况，b方法中调用a1方法，而a1方法不是b方法的属性，所以b方法将执行上下文的控制权交给a1方法
// a1方法访问变量a，先从自己的作用域中寻找，找到a=11
var a = 10;
function a1() {
    var a = 11;
    console.log("a:"+a);
}
function b() {
    var a = 20;
    a1();
}
b();    // 11
//    --------------------------------
// 第二种情况，同上一情况一样，只是现在aa2方法的作用域中没有了局部变量aa，所以会向上查询，找到全局变量aa=10
var aa = 10;
function aa2() {
    console.log("aa:"+aa);
}
function bb() {
    var aa = 20;
    aa2();
}
bb();    // 10

//    ---------------------------------
// 第三种情况，aaa3方法在bbb方法内部，所以它的上一级作用域是bbb，会先找到局部量aaa=20
var aaa = 10;
function bbb() {
    var aaa = 20;

    function aaa3() {
        console.log("aaa:"+aaa);//20
    }

    aaa3();
}
bbb();


//    ------------------------------------

var m = 20;
function c() {
    console.log(m);//20
}
c();
// ----------------------------------
// 这种情况主要需注意变量会预解析的问题
var n = 20;
function d() {
    console.log(n);//undefined
    var n = 10;
}

d();