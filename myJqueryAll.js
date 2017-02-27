function Jquery(arg) {
    this.elements = [];
    switch(typeof arg){
        case 'string':
            console.log(this.checkType(arg));
            this.elements = this.checkType(arg);
            break;
        default:
            break;
    }
}

//判断参数类型
Jquery.prototype.checkType = function (arg) {
    if(/^\./.test(arg)){
        return this.getElByClass(arg);
    }else if(/^\#/.test(arg)){
        return this.getElById(arg);
    }
}

//获取class
Jquery.prototype.getElByClass = function (arg) {
    var el = arg.substring(1);
    if(document.getElementsByClassName){
        return document.getElementsByClassName(el);
    }else{
        console.log('no getclass');
    }
}

//获取id
Jquery.prototype.getElById = function (arg) {
    var el = arg.substring(1);
    return document.getElementById(el);
}

//获取文本
Jquery.prototype.text = function (arg) {
    if(arguments[0]){
        this.elements.innerHTML = arg;
    }else{
        if(this.elements[0] instanceof Array){
            return this.elements[0].innerHTML;
        }else{
            return this.elements.innerHTML;
        }
    }
}

//实现jquery $符号的写法
function $(arg) {
    return new Jquery(arg);
}