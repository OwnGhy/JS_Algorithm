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
var Animal2 = function(name) {
    this.name = name;
}
Animal2.prototype.say = function () {
    console.log(this.name);
}
var Ma2 = function(name) {
    Animal2.call(this,name);
}
Ma2.prototype = Object.create(Animal2.prototype);
var ma2 = new Ma2('name of ma2');
ma2.say();//name of ma2