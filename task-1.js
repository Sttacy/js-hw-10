const person = {
  name: "Stacy",
  age: 24,
  gender: "female",
  introduce() {
    console.log(
      `Мене звати ${this.name}, мені ${this.age} років я ${this.gender}`
    );
  },
  changeName(newName) {
    this.name = newName;
  },
};

person.introduce();
person.changeName("Mango");
person.introduce();
