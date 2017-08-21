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
const submit = document.querySelector('#submitform')
// all the radio buttons
const medium = document.querySelector('#shirtmedium')
const large = document.querySelector('#shirtlarge')
const xlarge = document.querySelector('#shirtxlarge')
const green = document.querySelector('#shirtgreen')
const red = document.querySelector('#shirtred')
const black = document.querySelector('#shirtblack')
const blue = document.querySelector('#shirtblue')

const checkMarkSVG = `<svg width="88px" height="88px" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
            <title>circle-check</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="desktop-success" transform="translate(-415.000000, -415.000000)" fill="#4990E2">
                    <g id="circle-check" transform="translate(415.000000, 415.000000)">
                        <g id="Layer_1">
                            <path d="M44,0 C19.7,0 0,19.699 0,44 C0,68.301 19.7,88 44,88 C68.3,88 88,68.301 88,44 C88,19.699 68.3,0 44,0 Z M44,80 C24.118,80 8,63.882 8,44 C8,24.118 24.118,8 44,8 C63.882,8 80,24.118 80,44 C80,63.882 63.882,80 44,80 Z M54.627,33.17 L40.484,47.312 L34.828,41.656 C33.266,40.094 30.734,40.094 29.171,41.656 C27.609,43.218 27.609,45.751 29.171,47.314 L37.655,55.795 C39.217,57.357 41.751,57.357 43.312,55.795 L60.283,38.825 C61.845,37.263 61.847,34.731 60.284,33.168 C58.723,31.609 56.189,31.609 54.627,33.17 Z" id="circle-check"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>`

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
  }
  else {
    if (address2.value == '') {
      document.querySelector('#shippingAddress address').innerHTML = `<address>
                                                                          ${fname.value}</br>
                                                                          ${address.value}<br>
                                                                          ${city.value}, ${state.value} ${zipcode.value}<br>
                                                                          ${country.value}
                                                                      </address>`
      CheckTheSizeAndColor()
      submitform.disabled = false

    }
    else {
      document.querySelector('#shippingAddress address').innerHTML = `<address>
                                                                          ${fname.value}</br>
                                                                          ${address.value}<br>
                                                                          ${address2.value}<br>
                                                                          ${city.value}, ${state.value} ${zipcode.value}<br>
                                                                          ${country.value}
                                                                      </address>`
      CheckTheSizeAndColor()
      submitform.disabled = false
    }

  }
})
submitform.addEventListener('click', e => {
  document.querySelector('body').innerHTML = `<div class="orderComplete">
                                                <h2>Order Completed</h2>
                                                  <h3>Order Summary</h3>
                                                    <div id="productName">
                                                      <h4>Basic V-Neck Tee</h4>
                                                      <p>$20.00</p>
                                                    </div>
                                                    <div id="shippingCost">
                                                      <h4>Shipping</h4>
                                                      <p>Free</p>
                                                    </div>
                                                    <div id="totalPrice">
                                                      <h4>Total</h4>
                                                      <p>$20.00</p>
                                                    </div>
                                                    <div id="shippingAddress">
                                                      <h4>Shipping Address</h4>
                                                      <address>
                                                        ${fname.value}<br>
                                                        ${address.value}<br>
                                                        ${city.value}, ${state.value} ${zipcode.value}<br>
                                                        ${country.value}
                                                      </address>
                                                    </div>
                                                    ${checkMarkSVG}
                                                  </div>`
})


function CheckTheSizeAndColor() {
  if (medium.checked) {
    if (green.checked) {
      document.querySelector('#productName h3').innerHTML = 'Basic V-Neck Tee M Green'
    } else if (red.checked) {
      document.querySelector('#productName h3').innerHTML = 'Basic V-Neck Tee M Red'
    } else if (black.checked) {
      document.querySelector('#productName h3').innerHTML = 'Basic V-Neck Tee M Black'
    } else if (blue.checked) {
      document.querySelector('#productName h3').innerHTML = 'Basic V-Neck Tee M Blue'
    }
  }
  else if (large.checked) {
    if (green.checked) {
      document.querySelector('#productName h3').innerHTML = 'Basic V-Neck Tee L Green'
    } else if (red.checked) {
      document.querySelector('#productName h3').innerHTML = 'Basic V-Neck Tee L Red'
    } else if (black.checked) {
      document.querySelector('#productName h3').innerHTML = 'Basic V-Neck Tee L Black'
    } else if (blue.checked) {
      document.querySelector('#productName h3').innerHTML = 'Basic V-Neck Tee L Blue'
    }
  }
  else if (xlarge.checked) {
    if (green.checked) {
      document.querySelector('#productName h3').innerHTML = 'Basic V-Neck Tee XL Green'
    } else if (red.checked) {
      document.querySelector('#productName h3').innerHTML = 'Basic V-Neck Tee XL Red'
    } else if (black.checked) {
      document.querySelector('#productName h3').innerHTML = 'Basic V-Neck Tee XL Black'
    } else if (blue.checked) {
      document.querySelector('#productName h3').innerHTML = 'Basic V-Neck Tee XL Blue'
    }
  }
}
