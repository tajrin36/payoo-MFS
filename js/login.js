//set event handler
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    //prevent default reload the page
    event.preventDefault();

    //get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);

    //get the pin number
    const pinNumber = document.getElementById("pin").value;
    console.log(pinNumber);

    //validate the phone number and pin number
    if (phoneNumber === "123456789" && pinNumber === "1234") {
      window.location.href = "/homePage.html";
    } else {
      alert("wrong phone number or pin number");
    }
  });
