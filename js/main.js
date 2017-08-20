//all the form elements
const fname = document.querySelector('#fullname')
const email = document.querySelector('#email')
const address = document.querySelector('#address')
const address2 = document.querySelector('#address2')
const city = document.querySelector('#city')
const state = document.querySelector('#state')
const zipcode = document.querySelector('#zipcode')
const country = document.querySelector('#country')
const continueForward = document.querySelector('#proceed')
const shippingForm = document.querySelector('#shippingForm')
// all the radio buttons
const medium = document.querySelector('#shirtmedium')
const large = document.querySelector('#shirtlarge')
const xlarge = document.querySelector('#shirtxlarge')
const green = document.querySelector('#shirtgreen')
const red = document.querySelector('#shirtred')
const black = document.querySelector('#shirtblack')
const blue = document.querySelector('#shirtblue')


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
        return 'email mismatch'
      }
      if (this.input.value == '') {
        return false
      }
    }
    if (this.type == 'text' && this.input == address) {
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
    if (this.type == 'radio') {
      if (this.input == medium && this.input.checked == false) {
        return false
      }
      if (this.input == large && this.input.checked == false) {
        return false
      }
      if (this.input == xlarge && this.input.checked == false) {
        return false
      }
      if (this.input == green && this.input.checked == false) {
        return false
      }
      if (this.input == red && this.input.checked == false) {
        return false
      }
      if (this.input == black && this.input.checked == false) {
        return false
      }
      if (this.input == blue && this.input.checked == false) {
        return false
      }
    }
  }
}


continueForward.addEventListener('click', e => {
  e.preventDefault()

  //input creations
  let validFname = new ValidateClass(fname, 'text')
  let validEmail = new ValidateClass(email, 'email')
  let validAddress = new ValidateClass(address, 'text')
  let validCity = new ValidateClass(city, 'text')
  let validState = new ValidateClass(state, 'text')
  let validZipcode = new ValidateClass(zipcode, 'number')
  // radio button creations
  let validMedium = new ValidateClass(medium, 'radio')
  let validLarge = new ValidateClass(large, 'radio')
  let validXLarge = new ValidateClass(xlarge, 'radio')
  let validGreen = new ValidateClass(green, 'radio')
  let validRed = new ValidateClass(red, 'radio')
  let validBlack = new ValidateClass(black, 'radio')
  let validBlue = new ValidateClass(blue, 'radio')

  let noShirtSize = (validMedium.checkTheForm() == false && validLarge.checkTheForm() == false && validXLarge.checkTheForm() == false)
  let noColor = (validGreen.checkTheForm() == false && validRed.checkTheForm() == false && validBlack.checkTheForm() == false && validBlue.checkTheForm() == false)


  if (validFname.checkTheForm() == false || (validEmail.checkTheForm() == 'email mismatch' || validEmail.checkTheForm() == false) || validAddress.checkTheForm() == false || validCity.checkTheForm() == false || validState.checkTheForm() == false || validZipcode.checkTheForm() == false || noShirtSize || noColor) {
    if (validFname.checkTheForm() == false) {
      fname.insertAdjacentHTML('afterEnd', '<p class="error">Name cannot be left blank</p>')
    }
    if (validEmail.checkTheForm() == 'email mismatch') {
      email.insertAdjacentHTML('afterEnd', '<p class="error">An email needs the @ symbol.</p>')
    } else if (validEmail.checkTheForm() == false) {
      email.insertAdjacentHTML('afterEnd', '<p class="error">Email cannot be left blank</p>')

    }
    if (validCity.checkTheForm() == false) {
      city.insertAdjacentHTML('afterEnd', '<p class="error">City cannot be left blank</p>')
    }
    if (validAddress.checkTheForm() == false) {
      address.insertAdjacentHTML('afterEnd', '<p class="error">Address cannot be left blank</p>')
    }
    if (validState.checkTheForm() == false) {
      state.insertAdjacentHTML('afterEnd', '<p class="error">State cannot be left blank</p>')
    }
    if (validZipcode.checkTheForm() == false) {
      zipcode.insertAdjacentHTML('afterEnd', '<p class="error">Zipcode cannot be left blank</p>')
    }
    if (noShirtSize) {
      document.querySelector('#sizeSelect').insertAdjacentHTML('afterEnd', '<p class="error">Shirt size cannot be left blank</p>')
    }
    if (noColor) {
      document.querySelector('#colorSelect').insertAdjacentHTML('afterEnd', '<p class="error">A color needs to be selected</p>')
    }
  } else {
    document.querySelector('#shippingAddress address').innerHTML = `<address>
                                                                        ${fname.value}</br>
                                                                        ${address.value}<br>
                                                                        ${city.value}, ${state.value} ${zipcode.value}
                                                                    </address>`
  }
})
