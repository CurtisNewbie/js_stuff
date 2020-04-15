function say() {
  console.log("Saying");
}

class Monkey {
  constructor(name) {
    this.name = name;
  }

  type() {
    return `Monkey! Name:${this.name}`;
  }
}

// To export stuff in nodejs
module.exports = {
  name: "out.js",
  say: say,
  getName: function () {
    return "Curtis";
  },
  monkey: function getMonkey(name) {
    return new Monkey(name);
  },
};
