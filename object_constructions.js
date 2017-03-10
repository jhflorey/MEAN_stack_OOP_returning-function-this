// Objects constructors are just functions that act as blueprints for creating particular objects:

function NinjaConstructor(name, age, preOccupation) {
	var ninja = {};   // the object that will eventually be returned



// addition of properties to ninja:

	ninja.name = name;
	ninja.age = age;
	ninja.preOccupation = preOccupation;

// adition of methods to ninja :

	ninja.introduce = function(){
		console.log("Hi my name is" + " " + ninja.name + ". I used to be a" + " " + ninja.preOccupation + " and now I am a Ninja!");
	}


// return ninja:

	return ninja;
}

// create the Andrew Ninja

var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
Andrew.introduce();


// create the Michael Ninja

var Michael = NinjaConstructor("Michael", 34, "Founder");

// here we redefine the introduce method for a particular "instance" or object

Michael.introduce = function(){
	console.log("I am the Sensei");
}
Michael.introduce();