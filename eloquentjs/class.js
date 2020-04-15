class Rabbit {
  constructor(type) {
    this.type = type;
  }

  speak() {
    console.log(`I am yo, a ${this.type}`);
  }

  static toSpecialRabbit(rabbit) {
    return new Rabbit("Special " + rabbit.type);
  }
}

let rab = new Rabbit("Yellow Rabbit");
rab.speak();

// override properties
rab.name = "rabbit lol";

console.log(rab.name);

// use static methods
let specRab = Rabbit.toSpecialRabbit(rab);
specRab.speak();

// inheritance
class StrongRabbit extends Rabbit {
  constructor(type) {
    super(type);
    this.type = "Strong " + this.type;
  }

  yell() {
    console.log("I am strong!!  I can yell!!!! ahhhhhhh");
  }
}

let strongRab = new StrongRabbit("Yello Rabbit");
strongRab.yell();
strongRab.speak();

console.log(strongRab instanceof StrongRabbit);
console.log(specRab instanceof Rabbit);
console.log(specRab instanceof StrongRabbit);
