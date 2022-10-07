const form = document.querySelector(".main-form");
const formInputs = document.querySelectorAll(".main-form__input");
const formInputPhone = document.querySelector(".main-form__input--phone");
const formInputName = document.querySelector(".main-form__input--name");

function validatePhone(phone) {
  // const regular = ;
  return regular.test(String(phone));
}

form.onsubmit = function () {
  const phoneValue = formInputPhone.value;
  const emptyInputs = Array.from(formInputs).filter(
    (input) => input.value === ""
  );

  formInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  if (emptyInputs.length !== 0) {
    console.log("inputs not filled!");
    return false;
  }

  if (!validatePhone(phoneValue)) {
    console.log("phone not valid!");
    formInputPhone.classList.add("error");
    return false;
  } else {
    formInputPhone.classList.remove("error");
  }
};
