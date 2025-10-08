const form = document.querySelector("form")
const formInputs = document.querySelectorAll("input")

const firstName = document.querySelector(`#first_name`)
const lastName= document.querySelector(`#last_name`)
const phoneNumber = document.querySelector(`#phone_number`)
const email = document.querySelector(`#email`)
const password = document.querySelector(`#password`)
const confirmPassword = document.querySelector(`#confirm_password`)
const country= document.querySelector(`#country`)
const postalCode= document.querySelector(`#postal_code`)

const firstNameError = document.querySelector(`#first_name + span.error`)
const lastNameError = document.querySelector(`#last_name + span.error`)
const phoneNumberError = document.querySelector(`#phone_number + span.error`)
const emailError = document.querySelector(`#email+ span.error`)
const passwordError = document.querySelector(`#password + span.error`)
const confirmPasswordError = document.querySelector(`#confirm_password + span.error`)
const countryError = document.querySelector(`#country + span.error`)
const postalCodeError = document.querySelector(`#postal_code + span.error`)

formInputs.forEach((input) => {
    input.addEventListener("input", (event) => {
        const id = event.target.id
        
        switch (id) {
            case "first_name":
                if (event.target.validity.valid) {
                    firstNameError.textContent = ""
                } else {
                    showError()
                }
                break;
            case "last_name":
                if (event.target.validity.valid) {
                    lastNameError.textContent = ""
                } else {
                    showError()
                }
                break;
            case "phone_number":
                if (event.target.validity.valid) {
                    phoneNumberError.textContent = ""
                } else {
                    showError()
                }
                break;
            case "email":
                if (event.target.validity.valid) {
                    emailError.textContent = ""
                } else {
                    showError()
                }
                break;
            case "password":
                if (event.target.validity.valid) {
                    passwordError.textContent = ""
                } else {
                    showError()
                }
                break;
            case "confirm_password":
                if (password.value === confirmPassword.value) {
                    confirmPasswordError.textContent = ""
                } else {
                    showError()
                }
                break;
            case "country":
                if (event.target.validity.valid) {
                    countryError.textContent = ""
                } else {
                    showError()
                }
                break;
            case "postal_code":
                if (event.target.validity.valid) {
                    postalCodeError.textContent = ""
                } else {
                    showError()
                }
                break;
        }
    })
})

form.addEventListener("submit", (event) => {
  if (!form.checkValidity()) {
    showError();
    event.preventDefault();
  } else{
    alert(`Oh Good. Your form is valid ${String.fromCodePoint(0x1F60D)}`)
  }
});

function showError() {
    if (firstName.validity.valueMissing) {
        firstNameError.textContent = "Please enter the first name"
    } else if(firstName.validity.tooShort) {
        firstNameError.textContent = "The first name must be at least three characters"
    }

    if (lastName.validity.valueMissing) {
        lastNameError.textContent = "Please enter the last name"
    } else if (lastName.validity.tooShort) {
        lastNameError.textContent = "The last name must be at least three characters"
    }

    if (phoneNumber.validity.valueMissing) {
        phoneNumberError.textContent = "Please enter a phone number"
    } else if (phoneNumber.validity.patternMismatch) {
        phoneNumberError.textContent = "The phonenumber must be of this format(000-000-000000)"
    }

    if (email.validity.valueMissing) {
        emailError.textContent = "Please enter an email"
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "The email must be of this format(name@example.com)"
    }

    if (password.validity.valueMissing) {
        passwordError.textContent = "Please enter a password"
    } else if (password.validity.patternMismatch) {
        passwordError.innerHTML = `The password must have:
            <ul>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one digit</li>
                <li>At least one non-word character</li>
                <li>At least 8 characters, in any order</li>
            </ul>
        `
    }

    if (confirmPassword.validity.valueMissing) {
        confirmPasswordError.textContent = "Please enter a second password"
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "The passwords must be the same"
    }

    if (country.validity.valueMissing) {
        countryError.textContent = "Please select the country"
    }

    if (postalCode.validity.valueMissing) {
        postalCodeError.textContent = "Please enter a postal code"
    } else if (postalCode.validity.patternMismatch) {
        postalCodeError.textContent = "Please enter a postal code in this format(00000)"
    }
}