const fname = document.querySelector('#fullname')
const email = document.querySelector('#email')
const address = document.querySelector('#address')
const city = document.querySelector('#city')
const state = document.querySelector('#state')
const zipcode = document.querySelector('#zipcode')
const country = document.querySelector('#country')
const continueForward = document.querySelector('#proceed')
const shippingForm = document.querySelector('#shippingForm')



class ValidateClass {
  constructor(input, type) {
    this.input = input
    this.type = type
  }
  checkTheForm() {
    const validOrNot = this.input.validity

    if (this.input == fname && this.input.value == '') {
      if (this.input.value == '') {
        return false
      }
    }
    if (this.type == 'email') {
      if (validOrNot.typeMismatch) {
        return false
      }
      if (this.input.value == '') {
        return false
      }
    }
    if (this.type == 'text' && this.input == city) {
      if (this.input.value == '') {
        return false
      }
    }
    if (this.type == 'number') {
      if (this.input.value == '') {
        return false
      }
    }
    if (this.type == 'text' && this.input == state) {
      if (this.input.value == '') {
        return false
      }
    }
  }
}


continueForward.addEventListener('click', e => {
  e.preventDefault()

  let validFname = new ValidateClass(fname, 'text')
  let validEmail = new ValidateClass(email, 'email')
  let validCity = new ValidateClass(city, 'text')
  let validState = new ValidateClass(state, 'text')
  let validZipcode = new ValidateClass(zipcode, 'number')

  if (validFname.checkTheForm() == false && validEmail.checkTheForm() == false && validCity.checkTheForm() == false && validState.checkTheForm() == false && validZipcode.checkTheForm() == false) {
    console.log(validFname.checkTheForm())
    alert('cunt')
  }
})
