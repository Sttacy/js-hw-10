const user1 = {
  name: "Alice",
  balance: 500,
  addMoney(increaseAmount) {
    this.balance += increaseAmount;
  },
  balanceInfo() {
    console.log(this.balance);
  },
};

const users = [
  { name: "Tom", balance: 300 },
  { name: "Bob", balance: 200 },
  { name: "Charlie", balance: 1000 },
];

users.forEach((user) => {
  user1.addMoney.call(user, 20);
});

console.log(users);

const newArr = users.filter((user) => user.balance > 500);
console.log(newArr);

const newBalanceArr = users.map((user) => {
  return user.balance;
});
console.log(newBalanceArr);
