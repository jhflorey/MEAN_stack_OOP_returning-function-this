// Private variables are data that's accessible within the object but not as a property of the object. 
// We can create private methods and variables using what we know about function scoping!

function Ninja(name, age, prevOccupation){

	// Private
	var privateVar = "This is a private variables";
	var privateMethod = function(){
		console.log("This is a private method");
	}

	// Public
	this.name = name;
	this.age = age;
	this.prevOccupation = prevOccupation;
	this.introduce = function(){
		console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
		privateMethod();   // this work since it is a scope that can access privateMethod
		console.log(privateVar);      // this work too
	}
}

// create a new ninja

var Pariece = new Ninja("Pariece",24, "TIFA Teacher");
// Pariece.privateMethod();
// Pariece.privateVar();
Pariece.introduce();


// Why are private useful?

// Private variable can be useful to protect your objects from being altered in uninteded ways. 
//Say objects built with a User constructor function have a social security number, which you definetely don't want your program to alter. 
// You may make it private

function User(name, ssn){
	var social = ssn;
	this.name = name;
	this.getSSN = function(){
		return social;
	}
}
var mike = new User('Mike', 27894178);
console.log(mike.getSSN());    // 27894178


  












