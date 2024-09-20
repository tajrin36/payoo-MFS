//add event handler to the add money button inside the form
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {

    //prevent page reloading
    event.preventDefault();

    //get the add money amount
    const addMoneyInput = document.getElementById("add-money-input").value;
    // console.log(addMoneyInput);

    //get the pin number
    const pinMunberInput = document.getElementById('pin-number-input').value;
    // console.log(pinMunberInput);

    //validate the pin number
    if(pinMunberInput === '1234'){

        //get the main account balance 
        const accountBalance = document.getElementById('money-amount').innerText;
        // console.log(accountBalance);

        //convert the balance and add money from string to float value
        const addMoneyNumber = parseFloat(addMoneyInput);
        const mainBalance = parseFloat(accountBalance);
        // console.log(addMoneyNumber,mainBalance);

        //add the numbers
        const newBalance = addMoneyNumber + mainBalance;
        console.log(newBalance);

        //update the account balance after adding balance
        document.getElementById('money-amount').innerText = newBalance;
    }
    else{
        alert('Wrong pin number!Try again');
    }

  });
