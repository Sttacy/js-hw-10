const user1 = {
  firstName: "John",
  lastName: "Doe",
  friends: [
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Bob", lastName: "Smith" },
    { firstName: "Alice", lastName: "Wonderland" },
  ],
};

const user2 = {
  name: "Juan",
  surname: "Hernandez",
  friends: [
    { name: "Maria", surname: "Garcia" },
    { name: "Carlos", surname: "Rodriguez" },
    { name: "Ana", surname: "Lopez" },
  ],
};

function friendsInfo(user) {
  this.friends.forEach((user) => {
    console.log(user.name, user.surname);
  });
}

// friendsInfo(user2);

const user3 = {
  name: "Nastya",
  surname: "Tkachenko",
  friends: [
    { name: "Sonya", surname: "Purkun" },
    { name: "Katya", surname: "Avramenko " },
    { name: "Ana", surname: "Humeniuk" },
  ],
};

friendsInfo.call(user3);
