// using __pro__ of prototype to save memory space when we create lots of the same object 

function Cat(cat_name){
	var name = cat_name;
	this.getName = function(){
		return name;
	};
}
// adding a method to the cat prototype
Cat.prototype.sayHi = function(){
	console.log('meow');
};
// adding properties to the cat prototype
Cat.prototype.numLegs = 4;
var muffin = new Cat('miffin');
var bisscuit = new Cat('bisscuit');
console.log(muffin, bisscuit);
muffin.sayHi();                // meow
bisscuit.sayHi();              // meow
console.log(muffin.numLegs);  // 4