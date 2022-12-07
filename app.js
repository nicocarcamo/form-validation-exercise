const myForm = document.querySelector("form");

function checkInput() {

    let alerts = document.querySelector("#alerts");
    let nameValidation = document.getElementById("firstname");
    let lastNameValidation = document.getElementById("lastname");
    let cardValidation = document.getElementById("creditcard");
    let cvcValidation = document.getElementById("cvc");
    let amountValidation = document.getElementById("amount");
    let cityValidation = document.getElementById("city");
    let stateValidation = document.getElementById("state");
    let postalCodeValidation = document.getElementById("postalcode");


    if(cardValidation.value === "") {
        cardValidation.style.borderColor = '#D00903';
        alerts.classList.remove("d-none");
    }
    if(cvcValidation.value === "") {
        cvcValidation.style.borderColor = '#D00903';
        alerts.classList.remove("d-none");
    }
    if(amountValidation.value === "") {
        amountValidation.style.borderColor = '#D00903';
        alerts.classList.remove("d-none");
    }
    if (nameValidation.value === "") {
        nameValidation.style.borderColor = '#D00903';
        alerts.classList.remove("d-none");
    }
    if(lastNameValidation.value === "") {
        lastNameValidation.style.borderColor = '#D00903';
        alerts.classList.remove("d-none");
    }
    if(cityValidation.value === "") {
        cityValidation.style.borderColor = '#D00903';
        alerts.classList.remove("d-none");
    }
    if(stateValidation.value == 'Pick a state') {
        stateValidation.style.borderColor = '#D00903';
        alerts.classList.remove("d-none");
    }
    if(postalCodeValidation.value === "") {
        postalCodeValidation.style.borderColor = '#D00903';
        alerts.classList.remove("d-none");
    }
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});