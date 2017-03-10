// What if you tried to access the this keyword inside of a private method? Run this code:

// function Ninja(name, age, prevOccupation) {
//   // PRIVATE
//   var privateVar = "This is a private variable";
//   var privateMethod = function() {
//     console.log(this); // What will print here?
//   }
//   // PUBLIC
//   this.name = name;
//   this.age = age;
//   this.prevOccupation = prevOccupation
//   // PUBLIC METHODS DECLARED HERE
//   this.introduce = function() {
//     console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
//     privateMethod();           
//     console.log(privateVar);
//   }
// }
// var Speros = new Ninja("Speros", 24, "MBA");
// Speros.introduce();


// Inside of the private method, this refers to the global Window or Node object (depending on which environment you're running the script)! 
// This is bad; you never want to mess with the built-in globals because it can create very difficult-to-find bugs.

// One way is to capture a snapshot of this and store it in a variable that you call something else, which any method (public or private) is free to reference. 

function Ninja(name, age, prevOccupation){

	// Private
	var self = this;
	var privateVar = "This is a private variable";
	var privateMethod = function(){
		console.log("this is a private method for " + self.name);     // refer to name via self
		console.log(self);
	}
	//Public
	this.name = name;
	this.age = age;
	this.prevOccupation = prevOccupation;
	this.introduce = function(){
		console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
		privateMethod();
		console.log(privateVar);
	}
}
var Speros = new Ninja("Speros", 24, "MBA");
Speros.introduce();


// We declare a private varibale self that hangs on to the NINJA object constructed when we call var Speros = new Ninja('Speros', 24, 'MBA');
// to access the construced object from within private methods we can then refer to self





























