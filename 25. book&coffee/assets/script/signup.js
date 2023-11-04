const API_BASE_URL = 'http://localhost:3000'
const register = document.querySelector('#register')
const firstName = document.querySelector('#firstName').value
const lastName = document.querySelector('#lastName').value
const email = document.querySelector('#email').value
const username = document.querySelector('#username').value
const password = document.querySelector('#password').value
const balance = document.querySelector('#balance').value
const signUpBtn = document.querySelector('#signUp')

//whish count
if (JSON.parse(localStorage.getItem('fav'))) {
    let wishCount = (JSON.parse(localStorage.getItem('fav'))).length;
    let wishCountSpan = document.querySelector('#whish-list-count');
    wishCountSpan.textContent = wishCount;   
}
    
//cart count
if (JSON.parse(localStorage.getItem('cart'))) {
    let basketCount = (JSON.parse(localStorage.getItem('cart'))).length;
    let basketCountSpan = document.querySelector('#basket-quantity');
    basketCountSpan.textContent = basketCount;      
}

document.addEventListener("DOMContentLoaded", function () {
  
  register.addEventListener("submit", function (event) {
      event.preventDefault();

      // Regex email
      const emailPattern = /^\S+@\S+\.\S+$/;
      // Regex password 
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

      if (!email.match(emailPattern)) {
          Swal.fire({
              title: "Email Error",
              text: "Please enter a valid email address.",
              icon: "error",
          });
      } 
      else if (!password.match(passwordPattern)) {
          Swal.fire({
              title: "Password Error",
              text: "Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 6 characters long.",
              icon: "error",
          });
      } 
      else {
          axios.get('http://localhost:3000/users?email=' + email)
              .then(response => {
                  if (response.data.length > 0) {
                      Swal.fire({
                          title: "Email Exists",
                          text: "The email address is already registered. Please use another email or log in.",
                          icon: "error",
                      });
                  } else {
                      axios.post('http://localhost:3000/users', {
                          firstName,
                          lastName,
                          email,
                          username,
                          password,
                          balance
                      })
                      .then(response => {
                          Swal.fire({
                              title: "Registration Successful",
                              text: "You are now registered.",
                              icon: "success",
                          });
                      })
                      .catch(error => {
                          console.error(error);
                          Swal.fire({
                              title: "Error",
                              text: "An error occurred while registering.",
                              icon: "error",
                          });
                      });
                  }
              })
              .catch(error => {
                  console.error(error);
                  Swal.fire({
                      title: "Error",
                      text: "An error occurred while checking email availability.",
                      icon: "error",
                  });
              });
      }
  });
});