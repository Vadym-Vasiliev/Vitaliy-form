const users = [
  {
    name: "Ivan",
    surname: "Lopata",
    age: 25,
    sex: "man",
  },
  {
    name: "Petro",
    surname: "Kiosk",
    age: 14,
    sex: "man",
  },
  {
    name: "Roman",
    surname: "Bronza",
    age: 55,
    sex: "man",
  },
  {
    name: "Olga",
    surname: "Rozetka",
    age: 31,
    sex: "woman",
  },
  {
    name: "Anton",
    surname: "Zahidnui",
    age: 18,
    sex: "man",
  },
  {
    name: "Marina",
    surname: "Stomatolog",
    age: 17,
    sex: "woman",
  },

  {
    name: "Viktor",
    surname: "Purig",
    age: 67,
    sex: "man",
  },
  {
    name: "Slavik",
    surname: "Malui",
    age: 12,
    sex: "man",
  },
  {
    name: "Nazar",
    surname: "Peruka",
    age: 22,
    sex: "man",
  },
  {
    name: "Svitlana",
    surname: "Oper",
    age: 38,
    sex: "woman",
  },
];

function findNumbes(number, secondFunc) {}

// function findYoungUser(sortUsers) {
//   const sortArray = sortUsers.filter((el) => {
//     if (el.age < 16) {
//       return el;
//     }
//   });

//   return sortArray;
// }

// const result = findYoungUser(users);
// console.log(result);

// function findYoungNumber(sortUsers) {
//   const sortedArr = sortUsers.sort((a, b) => {
//     if (a.age > b.age) {
//       return 1;
//     } else if (a.age < b.age) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
//   return sortedArr[0];
// }

// const result = findYoungNumber(users);
// console.log(result);

// const maxNumberAgeUsers = users.reduce(
//   // (total, user) => (user.age > total.age ? user : total),
//   function (total, user) {
//     if (user.age > total.age) {
//       return user;
//     } else {
//       return total;
//     }
//   },
//   { age: 0 }
// );
// console.log(maxNumberAgeUsers);

// =======================
//FILTER

// users.filter((el) => {
//   console.log(el);
// });

//   console.log(result);
// });

//FOR

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// FOR

// for (let user of users) {
//   console.log(user);
// }

// ForEach

// users.forEach((user) => {
//   console.log(user);
// });

// MAP

// const newArrayUsers = users.map((user) => {
//   return user.age;
// });
// console.log(newArrayUsers);

// REDUCE

// const result = users.reduce((total, user) => {
//   return total + user.age;
// }, 0);
// console.log(result);

// FIND

// const result = users.find((user) => user.name === "Olga");
// console.log(result);

// FINDINDEX

// const result = users.findIndex((user) => user.name === "Olga");
// console.log(result);

// ==============================

let a = ""; // перше число
let b = ""; // друге число
let sign = ""; //знак операції
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

//Екран

const out = document.querySelector(".calc__screen p");

function clearAll() {
  a = ""; // перше число
  b = ""; // друге число
  sign = ""; //знак операції
  finish = false;
  out.textContent = 0;
}

document.querySelector(".calc__btn--ac").onclick = clearAll;

document.querySelector(".calc__btns").onclick = (event) => {
  //нажата не кнопка
  if (!event.target.classList.contains("calc__btn")) return;
  //нажата не кнопка clearAll ac
  if (event.target.classList.contains("calc__btn--ac")) return;

  out.textContent = "";
  // отримую нажату кнопку

  const key = event.target.textContent;

  //якщо нажата кнопка 0-9

  console.log(digit, key);

  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    return;
  }

  //якщо нажата кнопка + - / *

  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }

  //нажата =

  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Error";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
  }
};
