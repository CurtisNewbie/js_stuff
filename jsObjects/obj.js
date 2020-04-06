class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log(`Whats'up, I am ${this.name}, and I am ${this.age} years old`);
  }
}

getPerson = function(name, age) {
  return new Person(name, age);
};

getAdult = function(name) {
  return new Person(name, 18);
};

Person.prototype.whoAmI = function() {
  console.log("I am a Person");
};

Person.prototype.type = "Human";

persons = [];
persons.push(getPerson("cya", 12));
persons.push(getPerson("bob", 13));
persons.push(getAdult("tom"));

for (let p of persons) {
  p.say();
  p.whoAmI();
  console.log("Type:", p.type);
}
