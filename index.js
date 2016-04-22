'use strict';

var Person = function(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.print = function printPerson() {
	console.log(`Name: ${this.name}\nAge: ${this.age}\n`)
}

var bob = new Person('Bob', 40)
bob.print()

var luigi = new Person('Luigi', 35)
luigi.print()

var link = new Person('Link', 18)
link.print()
