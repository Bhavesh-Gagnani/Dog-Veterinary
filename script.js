const buttons = document.querySelectorAll("#buyBtn_1, #buyBtn_2, #buyBtn_3");
const process = document.querySelectorAll("#btn-1, #btn-2, #btn-3, #btn-4");
const nav_input = document.getElementById("nav-input");
const nav_btn = document.getElementById("nav-btn");
const foot_btn = document.getElementById("foot_btn");
const foot_input = document.getElementById("foot_input");
const foot_icon = document.getElementById("foot_icon");

buttons.forEach((btn) => {
  const basePrice = Number(btn.getAttribute("value"));
  let currentTotal = 0;

  btn.addEventListener("click", () => {
      btn.disabled = true;
      btn.textContent = "Processing...";

      setTimeout(() => {
          currentTotal += basePrice;
          btn.textContent = `$${currentTotal}`;
          btn.disabled = false;
      }, 2000);
  });
});

process.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.disabled = true;
      btn.textContent = "Processing...";
    });
});

nav_btn.addEventListener("click", (event) => {
    event.preventDefault();

    if (nav_input.value.trim() !== "") {
      nav_btn.disabled = true;
      nav_input.value = "Thank You";
      
      setTimeout(() => {
      nav_input.value = "";
      nav_btn.disabled = false;
    }, 2000);}
    else {
      alert("Please enter a search term.");
    }
});

let isSubscribed = false;

foot_btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (!isSubscribed) {
    const email = foot_input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email !== "" && emailRegex.test(email)) {
      foot_icon.classList.remove("fa-location-arrow");
      foot_icon.classList.add("fa-check");
      foot_input.disabled = true;
      isSubscribed = true;
    } else {
      alert("Please enter a valid email.");
    }
  } else {
    foot_icon.classList.remove("fa-check");
    foot_icon.classList.add("fa-location-arrow");
    foot_input.disabled = false;
    foot_input.value = "";
    isSubscribed = false;
  }
});


