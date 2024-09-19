//set event handler
document.getElementById('btn-login').addEventListener('click',function(event){

    //prevent default reload the page
    event.preventDefault();
    console.log("login button clicked");

    //get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})
