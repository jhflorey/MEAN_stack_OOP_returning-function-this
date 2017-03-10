// functions, if theyn are left to themselves, return undefined , since methods are just functions set keys of an object, if they are not told explicity to return somwthing, they too return undefined

// Let make a singly linked list where we call a bunch of methods in one line!

var Node = function(val){
	this.val = val;
	this.next = null;
}
Node.prototype.passThis = function(custom_return){
	console.log(this, "this");
	console.log(this.self, "self");
	console.log(custom_return, "My Return");
	return custom_return;
}
var SingleList = function(){
	this.head = null;
}
SingleList.prototype.add = function(val){
	if (!this.head){
		this.head = new Node(val);
		return this;
	}
	var current = this.head;
	while(current.next){
		current = current.next;
	}
	current.next = new Node(val);
	return this;
};
SingleList.prototype.dequeue = function(callback){
	var eliminateNode = this.head;
	this.head = this.head.next;
	eliminateNode.next == null;
	if (typeof(callback) == 'function'){
		callback(eliminateNode);
	}
	//console.log(this.head)  // optional
};
