const confirmBtn = document.querySelector(".confirm-button");
const input = document.querySelectorAll("input");
const error = document.querySelectorAll(".error");
const cardName = document.querySelector(".card-name");
const cardNum = document.querySelector(".card-num");
const cardExpM = document.querySelector(".exp-month");
const cardExpY = document.querySelector(".exp-year");
const cardNumber = document.querySelector(".card-number");
const cardHolderName = document.querySelector(".cardholder-name");
const experiyDate = document.querySelector(".expiery-date");
const cardCVC = document.querySelector(".card-cvc");
const cvcNumber = document.querySelector(".cvc-number");
const formContainer = document.querySelector(".form-container");
const confirmContainer = document.querySelector(".confirmed-container");
const continueBtn = document.querySelector(".continue-btn");
const formInput = document.querySelector(".form");

error.forEach((e) => {
  e.classList.add("hidden");
});
input.forEach((e) => {
  e.style.removeProperty("border-color");
});

const addHidden = function (e) {
  e.style.removeProperty("border-color");
  e.closest(".card-form").querySelector(".error").classList.add("hidden");
};

const removeHidden = function (e) {
  e.closest(".card-form").querySelector(".error").classList.remove("hidden");
  e.style.borderColor = "hsl(0, 100%, 66%)";
};

function onlyNumbers(array) {
  const a = array.split("");
  if (a.length === 0) return false;
  return a.every((element) => {
    if (isNaN(Number(element))) return false;
    else return true;
  });
}

confirmBtn.addEventListener("click", function (e) {
  input.forEach((e) => {
    if (e.value === "") {
      removeHidden(e);
    } else {
      addHidden(e);
    }
  });
  const cardNumberValue = cardNum.value.replaceAll(" ", "");
  if (cardNumberValue.length === 16 && onlyNumbers(cardNumberValue)) {
    cardNumber.textContent = cardNum.value;
  } else {
    removeHidden(cardNum);
  }
  if (cardName.value !== "") {
    cardHolderName.textContent = cardName.value;
  }
  if (onlyNumbers(cardExpM.value) && onlyNumbers(cardExpY.value)) {
    experiyDate.textContent = `${cardExpM.value}/${cardExpY.value}`;
  } else if (onlyNumbers(cardExpM.value)) {
    experiyDate.textContent = `${cardExpM.value}/00`;
  } else if (onlyNumbers(cardExpY.value)) {
    experiyDate.textContent = `00/${cardExpY.value}`;
  } else {
    removeHidden(cardExpY);
    removeHidden(cardExpY);
  }
  if (cardCVC.value.split("").length === 3 && onlyNumbers(cardCVC.value)) {
    cvcNumber.textContent = cardCVC.value;
  }

  const errorList = Array.from(error);
  if (errorList.every((e) => e.classList.contains("hidden"))) {
    formContainer.classList.add("hidden");
    confirmContainer.classList.remove("hidden");
  }
});

continueBtn.addEventListener("click", function (e) {
  formContainer.classList.remove("hidden");
  confirmContainer.classList.add("hidden");
  cvcNumber.textContent = "000";
  formInput.reset();
  cardNumber.textContent = "0000 0000 0000 0000";
  cardHolderName.textContent = "Jane Appleseed";
  experiyDate.textContent = `00/00`;
});
