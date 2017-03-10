// OOP (object oriented programming) is an organization principle that has revolutionized programming and saved developers countless hours.
// JavaScript isn't inherently object-oriented (though ES6 does introduce the Class keyword). But this doesn’t mean that we don’t use an OOP style of programming in all of our work. 
//We pair JavaScript Objects and Functions to create Constructors that will act as our blueprints.

var Todd = {
	name: "Todd",
	sayName: function(){
		console.log("Todd");
	}
}
Todd.sayName();

function NewPerson(name){
	console.log(this);
	return {
		name:name,
		sayName: function(){
			console.log(name);
		}
	}
}

var Jay = NewPerson("Jay");
var Sara = NewPerson("Sara");
Jay.sayName();
Sara.sayName();

function Person(name){
	console.log(this);
	this.name = name;
	this.sayName = function(){
		console.log(name);
	}
}

var Jimmy = new Person("Jimmy");
Jimmy.sayName();