//cash out show button
document
  .getElementById("cash-out-show-btn")
  .addEventListener("click", function () {
    document.getElementById("cash-out-input-form").classList.remove("hidden");
    document.getElementById("add-money-input-form").classList.add("hidden");
  });

//add money form
document
  .getElementById("add-money-show-btn")
  .addEventListener("click", function () {
    document.getElementById("add-money-input-form").classList.remove("hidden");
    document.getElementById("cash-out-input-form").classList.add("hidden");
  });
