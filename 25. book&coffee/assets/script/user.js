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

const userInfo = document.querySelector("#user-info");
const userOrder = document.querySelector("#user-orders");

document.addEventListener("DOMContentLoaded", () => {
  const API_BASE_URL = "http://localhost:3000";

  axios.get(API_BASE_URL + "/users").then((response) => {
    const users = response.data;
    console.log(users);

    const dataFromLocal = JSON.parse(localStorage.getItem("users"));
    console.log(dataFromLocal);

    const findedUser = users.find((user) => user.id == dataFromLocal.id);
    if (findedUser) {
      userInfo.innerHTML = `
            <h5>${findedUser.name}</h5>
            <ul>
              <li>Email: ${findedUser.email}</li>
              <li>Password: ${findedUser.password}</li>
              <li>Balance: ${findedUser.balance}</li>
            </ul>
          `;
            //leave
            let logOutBtn = document.querySelector("#logOut");
            logOutBtn.addEventListener("click", function () {
              userBar.classList.replace("d-flex", "d-none");
              registerBar.classList.replace("d-none", "d-flex");
              localStorage.removeItem("users");
            });
    }
  });
});
