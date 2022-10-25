import Inputmask from "inputmask";
import JustValidate from "just-validate";

const form = document.querySelector(".main-form");
const formInputs = document.querySelectorAll(".main-form__input");
const formInputPhone = document.querySelector(".main-form__input--phone");
const formInputName = document.querySelector(".main-form__input--name");
const formBtn = document.querySelector(".main-form__btn");

const inputMask = new Inputmask.default("+(380) 999-999-999");
inputMask.mask(formInputPhone);

const validate = new JustValidate("#form", {
  // errorFieldCssClass: "is-invalid",
});

validate
  .addField("#name", [
    {
      rule: "minLength",
      value: 1,
    },
    {
      rule: "maxLength",
      value: 30,
    },
    {
      rule: "required",
    },
  ])
  .addField("#phone", [
    {
      validator: () => {
        const phone = formInputPhone.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 9;
      },
    },
    {
      rule: "required",
    },
  ])

  .addField("#file", [
    {
      rule: "files",
      value: {
        files: {
          extensions: ["jpeg", "png", "jpg"],
          types: ["image/jpeg", "image/png", "image/jpg"],
        },
      },
    },
    {
      rule: "minFilesCount",
      value: 1,
    },
  ]);

// formBtn.addEventListener("click", (event) => {
//   event.preventDefault();
// });

// const validate = new JustValidate("#form", {
//   rules: {
//     tel: {
//       required: true,
//       function: () => {
//         const phone = formInputPhone.inputmask.unmaskedvalue();
//         console.log(phone);

//         return Number(phone) && phone.length === 10;
//       },
//     },
//   },
// });

// const phoneValue = formInputPhone.value;
// const nameValue = formInputName.value;
// const emptyInputs = Array.from(formInputs).filter(
//   (input) => input.value === ""
// );

// formInputs.forEach(function (input) {
//   if (input.value === "") {
//     input.classList.add("error");
//   } else {
//     input.classList.remove("error");
//   }
// });

//   if (emptyInputs.length !== 0) {
//     console.log("inputs not filled!");
//     return false;
//   }

// function validatePhone(phone) {
//   // const regular = /^\+38\s\(\d{3 }\);
//   return regular.test(String(phone));
// }

// function validateName(name) {
//   const regular = [a - zA - Z] + $;
//   return regular.test(String(name));
// }

// form.onsubmit = function () {
//   const phoneValue = formInputPhone.value;
//   const emptyInputs = Array.from(formInputs).filter(
//     (input) => input.value === ""
//   );

//   formInputs.forEach(function (input) {
//     if (input.value === "") {
//       input.classList.add("error");
//     } else {
//       input.classList.remove("error");
//     }
//   });

//   if (emptyInputs.length !== 0) {
//     console.log("inputs not filled!");
//     return false;
//   }

//   if (!validatePhone(phoneValue)) {
//     console.log("phone not valid!");
//     formInputPhone.classList.add("error");
//     return false;
//   } else {
//     formInputPhone.classList.remove("error");
//   }
// };
