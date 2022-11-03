"use strict";
console.log("arrObjReduce.js");

const users = [
  {
    name: "James",
    age: 65,
    gender: "male",
    town: "London",
  },
  {
    name: "Jane",
    age: 27,
    gender: "female",
    town: "Kaunas",
  },
  {
    name: "Serbentautas",
    age: 30,
    gender: "male",
    town: "Kaunas",
  },
  {
    name: "Mike",
    age: 35,
    gender: "male",
    town: "Kaunas",
  },
  {
    name: "June",
    age: 47,
    gender: "female",
    town: "London",
  },
];

// gauti visu useriu amziu vidurki

const usersAvg = users.reduce((avg, uObj) => avg + uObj.age, 0) / users.length;

console.log("usersAvg ===", usersAvg);

const ages =
  users.map((uObj) => uObj.age).reduce((avg, sk) => avg + sk, 0) / users.length;
// obj destructuring
// const ages = users.map(({ age }) => age).reduce((avg, sk) => avg + sk, 0) / users.length;
console.log("ages ===", ages);

// 1gauti visu vardu ilgiu vidurki

const userNameLengthAvg = users.reduce((avg, uObj) => {
  const currentUserLength = uObj.name.length;
  const currentUserAvgPart = currentUserLength / users.length;
  return avg + currentUserAvgPart;
}, 0);
console.log(
  "name lengths",
  users.map((u) => u.name.length)
);
console.log("userNameLengthAvg ===", userNameLengthAvg);

// 2. grazinti jauniausia zmogu
const youngest = users.reduce((foundYoungest, uObj) => {
  if (uObj.age < foundYoungest.age) {
    foundYoungest = uObj;
  }
  return foundYoungest;
}, users[0]);

console.log("youngest ===", youngest);

// kiek nariu yra is londono.
const londUsersObj = users.reduce(
  (accObj, uObj) => {
    // atliekma veiksmus su obj
    if (uObj.town === "London") {
      accObj.London++;
    }
    // grazinam objekta, ne veiksma su objektu
    return accObj;
  },
  { London: 0 }
);
console.log("londUsersObj ===", londUsersObj);
// const rez = {
//   London: 2,
// };

//  gauti toki objekta
// let gendersObjInit = {
//   male: [],
//   female: [],
// };
let gendersObjInit = {};
gendersObjInit["male"] = [];
gendersObjInit.female = [];

const gendersObj = users.reduce((accObj, uObj) => {
  if (uObj.gender === "female") {
    // jei tai moteris
    accObj.female.push(uObj);
  } else {
    // jei tai vyras
    accObj.male.push(uObj);
  }
  // return
  return accObj;
}, gendersObjInit);

console.log("gendersObj ===", gendersObj);
console.log("gendersObjInit ===", gendersObjInit);

// gauti sugrupuuota pagal miestus objekta

const usersByTown = users.reduce((accObj, uObj) => {
  //  jei toks key(miestas) jau pridetas prie accObj
  if (accObj[uObj.town]) {
    // tai as noriu padidinti kieki
    accObj[uObj.town]++;
  } else {
    //  kitu atveju - prideti toki key
    accObj[uObj.town] = 1;
  }

  return accObj;
}, {});
console.log("usersByTown ===", usersByTown);
