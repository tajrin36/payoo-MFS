document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    console.log("button clickde");

    //get the cash out amount
    const cashOutAmount = document.getElementById('cash-out-input').value;
    // console.log(cashOutAmount);

    //get the pin number
    const cashOutPinNumber = document.getElementById('pin-number-cash-out').value;
    // console.log(cashOutPinNumber);

    //check the validity of pin number
    if(cashOutPinNumber === '1234'){
        //get the main balance
        const currentBalance = document.getElementById('money-amount').innerText;
        // console.log(currentBalance);

        //convert the balance from string to number
        const accountMainBalance = parseFloat(currentBalance);
        const cashOutBalance = parseFloat(cashOutAmount);

        const newAccountBalance = accountMainBalance - cashOutBalance;
        // console.log(newAccountBalance);

        //update the main balance
        document.getElementById('money-amount').innerText = newAccountBalance;
    }
    else{
        alert("Wrong pin number!Try again");
    }

})
