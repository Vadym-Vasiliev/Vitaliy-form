import Inputmask from "inputmask";
import JustValidate from "just-validate";

const formInputs = document.querySelectorAll(".main-form__input");
const formInputPhone = document.querySelector(".main-form__input--phone");
const formInputName = document.querySelector(".main-form__input--name");
const formInputFile = document.querySelector(".main-form__input--file");
const content = document.querySelector(".main-content");

const inputMask = new Inputmask.default("+(380) 999-999-999");
inputMask.mask(formInputPhone);

const validate = new JustValidate("#form");

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
  ])
  .onSuccess(() => {
    const valuePhone = formInputPhone.value;
    const valueName = formInputName.value;
    const valueFile = URL.createObjectURL(formInputFile.files[0]);

    formInputs.forEach((input) => {
      input.value = "";
    });

    content.innerHTML += `<div class="main-content__body"><button class="main-content__btn" type="button">X</button><div class="main-content__text">${valueName}</div>
    <div class="main-content__text">${valuePhone}</div>
    <img class="main-content__img" src="${valueFile}" alt="file"></div>`;

    const closeBtnCards = document.querySelectorAll(".main-content__btn");

    closeBtnCards.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
      });
    });
  });
