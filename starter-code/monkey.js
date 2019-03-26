console.log("monkey.js loaded");
/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

// var Monkey = {}

// Monkey.name = "ram";

// Monkey.species ="yard";

// Monkey.foodsEaten = ["banana", "apple"];

// console.log(Monkey);

var Monkey = function (name, species){

this.name = name;
this.species = species;
this.foodsEaten = [];

}

Monkey.prototype.eatSomething = function(food
){
    
   this.foodsEaten.push(food);
}

Monkey.prototype.introduce = function(){

	    console.log(this.name + ' is ' + this.species +'i love to eat'+  this.foodsEaten );


}
