var MyObjConstructor = function(name){
	var myprivateVar = "Hello";
	this.name = name;
	this.method = function(){
		console.log("I am a method");
	};
}
var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
console.log(obj1);
obj1.newProperty = "newProperty";
obj1.__proto__.anotherProperty = "anotherProperty";
console.log(obj1.anotherProperty);  // anotherProperty
console.log(obj1.newProperty);		// newproperty
console.log(obj2.anotherProperty);	// anotherProperty
console.log(obj2.newProperty);		// undefined

// Very cool! While, expectedly, the line obj1.newProperty = 'newProperty!' gave obj1 a new property that obj2 couldn't accesss.


// the code obj1.__proto__.anotherProperty = 'anotherProperty!' can be accessed by both obj1 and obj2., 
// because they both share a prototype object since they're both instances of MyObjConstructor. 
// That's how JavaScript does inheritance! Meanwhile, what about that other __proto__ inside the first one? 
// That's for all objects! If you add things to it, those properties or methods can be accessed/invoked via all the objects in your program!

