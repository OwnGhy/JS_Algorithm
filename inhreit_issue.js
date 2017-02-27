//继承1
function Animal(name) {
    this.name = name;
}

Animal.prototype = {
    say:function () {
        console.log(this.name);
    }
}

function Ma(name) {
    this.name = name;
}
Ma.prototype = new Animal('name of animal');
var ma = new Ma('name of ma');
ma.say();//name of ma

//继承2
function Animal2(name) {
    this.name = name;
    this.say = function () {
        console.log(this.name);
    }
}

function Ma2(name) {
    this.name = name;
    Animal2.call(this,'name of animal2');
}
var ma2 = new Ma2('name of ma2');
ma2.say();//name of animal2