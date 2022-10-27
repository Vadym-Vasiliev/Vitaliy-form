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
