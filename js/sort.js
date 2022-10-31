"use strict";
console.log("sort.js");

const users = [
  {
    name: "James",
    age: 23,
    gender: "male",
    town: "London",
  },
  {
    name: "June",
    age: 25,
    gender: "female",
    town: "Paris",
  },
  {
    name: "Bruno",
    age: 42,
    gender: "male",
    town: "Barcelona",
  },
  {
    name: "Carla",
    age: 28,
    gender: "female",
    town: "Prague",
  },
];

console.table(users);

// isrikiuoti pagal amziu didejanciai
// users.sort((a, b) => a.age - b.age);
// console.table(users);

// isrikiuoti pagal amziu mazejanciai
// users.sort((a, b) => b.age - a.age);
// console.table(users);

console.log(users[0].town > users[1].town);

// rikiuojam pagal miesta
users.sort((a, b) => (a.town > b.town ? 1 : -1));
console.table(users);

// rikiuojam pagal gender
users.sort((a, b) => a.gender.localeCompare(b.gender));
console.log("a.gender.localeCompare(b.gender)");
console.table(users);

// isrikiuoti musu masyva pagal varda
// az

// za

// taikomes
const pNumsEl = document.getElementById("nums");
const nums = [5, 10, 1, 50, 12];
// 1. i ` <p id="nums"></p>` surasyti skaicius is `const nums = [5, 10, 1, 50, 12];`
const stringFromArray = nums.join(", ");
pNumsEl.textContent = stringFromArray;

// 2. paspaudus pelyte ant to paragrafo isrikiuoti skaicius didejancia tvarka
pNumsEl.addEventListener("click", () => {
  console.log("click");
  nums.sort((x, y) => x - y);
  pNumsEl.textContent = nums.join(", ");
});

//3. sugeneruoti ol sarasa is const colors = ['red', 'green', 'blue', 'yellow'];

//4. pridideti html mygtuka, kuri paspaudus isrikiuoti spalvas pagal abecele mazejancia tvarka
