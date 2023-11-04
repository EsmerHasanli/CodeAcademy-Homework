// //whish count
// if (JSON.parse(localStorage.getItem("fav"))) {
//   let wishCount = JSON.parse(localStorage.getItem("fav")).length;
//   let wishCountSpan = document.querySelector("#whish-list-count");
//   wishCountSpan.textContent = wishCount;
// }

// //cart count
// if (JSON.parse(localStorage.getItem("cart"))) {
//   let basketCount = JSON.parse(localStorage.getItem("cart")).length;
//   let basketCountSpan = document.querySelector("#basket-quantity");
//   basketCountSpan.textContent = basketCount;
// }

// const API_BASE_URL = "http://localhost:3000";
// const logInForm = document.querySelector("#logIn");
// const userBar = document.querySelector("#loged");
// const registerBar = document.querySelector("#register");

// //log in
// logInForm.addEventListener("submit", async function (e) {
//   e.preventDefault();

//   const email = document.querySelector("#email").value;
//   const password = document.querySelector("#password").value;

//   await axios.get(API_BASE_URL + "/users?email=" + email).then((response) => {
//     const user = response.data[0];
//     if (user && user.password === password && user.email === email) {
//       localStorage.setItem("users", user.id);
//       Swal.fire({
//         title: "Login Successful",
//         text: "You are now logged in.",
//         icon: "success",
//       });

//       //get user id

//       const loggedUserId = localStorage.getItem("users");

//       if (loggedUserId) {
//         console.log(loggedUserId);
//         userBar.classList.replace("d-none", "d-flex");
//         registerBar.classList.replace("d-flex", "d-none");
//         console.log(loggedUserId);
//         let username = document.querySelector("#username");
//         username.textContent = email;
//       }
//     } else {
//       Swal.fire({
//         title: "Incorrect Email or Password",
//         text: "Please check your email and password and try again.",
//         icon: "error",
//       });
//     }

//     //leave
//     let logOutBtn = document.querySelector("#logOut");
//     logOutBtn.addEventListener("click", function () {
//       userBar.classList.replace("d-flex", "d-none");
//       registerBar.classList.replace("d-none", "d-flex");
//       localStorage.removeItem("users");
//     });
//   });
// });

//whish count
if (JSON.parse(localStorage.getItem("fav"))) {
  let wishCount = JSON.parse(localStorage.getItem("fav")).length;
  let wishCountSpan = document.querySelector("#whish-list-count");
  wishCountSpan.textContent = wishCount;
}

//cart count
if (JSON.parse(localStorage.getItem("cart"))) {
  let basketCount = JSON.parse(localStorage.getItem("cart")).length;
  let basketCountSpan = document.querySelector("#basket-quantity");
  basketCountSpan.textContent = basketCount;
}

const API_BASE_URL = "http://localhost:3000";
const logInForm = document.querySelector("#logIn");

//log in
logInForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  await axios.get(API_BASE_URL + "/users?email=" + email).then((response) => {
    const user = response.data[0];
    if (user && user.password === password && user.email === email) {
      localStorage.setItem(
        "users",
        JSON.stringify({ id: user.id, email: user.email })
      );
      Swal.fire({
        title: "Login Successful",
        text: "You are now logged in.",
        icon: "success",
      });

      //get user id
      const userBar = document.querySelector("#loged");
      const registerBar = document.querySelector("#register");

      const loggedUserId = JSON.parse(localStorage.getItem("users"));

      if (loggedUserId.id) {
        userBar.classList.replace("d-none", "d-flex");
        registerBar.classList.replace("d-flex", "d-none");

        let username = document.querySelector("#username");
        username.textContent = loggedUserId.email;
      }
    } else {
      Swal.fire({
        title: "Incorrect Email or Password",
        text: "Please check your email and password and try again.",
        icon: "error",
      });
    }

    //leave
    let logOutBtn = document.querySelector("#logOut");
    logOutBtn.addEventListener("click", function () {
      userBar.classList.replace("d-flex", "d-none");
      registerBar.classList.replace("d-none", "d-flex");
      localStorage.removeItem("users");
    });
  });
});
