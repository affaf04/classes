// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances
class Cat{
    constructor ( name , age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    scratch() {
        console.log(`${this.name} is scratching the furniture`);
      }
      
    drink() {
        console.log('slurp')
    }

    makeSound() {
        console.log('meow')
    }
    
}

const cat1 = new Cat ('Tom', 6, 'gray')
console.log(cat1)
const cat2 = new Cat ( 'Micho', 1 , 'black and white')
console.log(cat2)

cat1.scratch();
cat2.makeSound();

// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

class Pirate {

    constructor(name , eyePatch, shipName){
        this.name = name;
        this.eyePatch = eyePatch;
        this.shipName= shipName;
    }

      attack() {
        console.log(`${this.name} is attacking`)
      }
      sail() {
        console.log( `${this.name} set sail`)
}
      celebrate() {
        console.log (`${this.name} is celebrating!`)
      }
      
  }      


  const blackPearl = [ new Pirate ( 'Sparraw', false , ' black Pearl') , new Pirate ( 'Jack', true, 'Black Pearl'),new Pirate ( 'Frade', true, 'Black Pearl') ]

  const jollyRoger = [ new Pirate ( 'Luffi', false , ' jolly Roger') , new Pirate ( 'Zoro', false, 'Jolly Roger'),new Pirate ( 'Nami', false, 'Jolly Roger') ]

  blackPearl.forEach(pirate => {
  console.log( pirate.name, pirate.eyePatch, pirate.shipName);
});

jollyRoger.forEach(pirate => {
    console.log( pirate.name, pirate.eyePatch, pirate.shipName);
  });