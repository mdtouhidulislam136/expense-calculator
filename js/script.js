
// function handlaing all input value
function getInputValue(inputId){

    // taking expense input value
    const inputValue = document.getElementById(inputId);
    const inputValueAmount = parseFloat(inputValue.value);


// error handling if input negative
    const errorNotification = document.getElementById('notify-fail');

    if(inputValueAmount < 0 ){
        errorNotification.style.display = 'block';
    }

    else if(inputValueAmount){
        errorNotification.style.display = 'none';
        
    }

    inputValue.value ='';
    return inputValueAmount;
        
    
}


// income input error handling 
function incomeInput(incomeId){
    const incomeValue = document.getElementById(incomeId);
    const incomeValueAmount = parseFloat (incomeValue.value);

    const incomeError = document.getElementById('incomeInput-fail')

    if(incomeValueAmount < 0){
        incomeError.style.display = 'block';
    }

    else if (incomeValueAmount){
        incomeError.style.display = 'none';
    }

    return incomeValueAmount;
}
    
 
 
// after clicking calculate button what will happen showing below
document.getElementById('calculator').addEventListener('click', function () {

    // input function called here for food 
    const foodExpence = getInputValue('food');

    // input function called here for rent
    const rentExpence = getInputValue('rent');

   // input function called here for clothers
    const clotheExpence = getInputValue('clothes');
    
    // total expense for food, rent, clothes
    const totalExpence = foodExpence + rentExpence + clotheExpence;

    //showing total expence amount using innertext
    const totalExpenceAmount = document.getElementById('total-expence');
    totalExpenceAmount.innerText = totalExpence;

    
    //total monthly income amount 
    const incomeAmount = incomeInput('income');
    
    // balance after expense
    const balance =  incomeAmount - totalExpence;

   

    // showing total balance after expence
    const totalBalance = document.getElementById('balance');
    totalBalance.innerText = balance;


});

// here we worked with savings amount, how much percentage want to save from the salary

document.getElementById('save').addEventListener('click', function(){

    // savings input as percentage
    const savingInput = document.getElementById('savings');
    const savingpercent = parseFloat(savingInput.value);

    // total monthly income input as a value
    const income = document.getElementById('income');
    const incomeAmount = parseFloat(income.value);

    // total savings from the salary
    const savingAmount = (incomeAmount/100) * savingpercent;

    // showing total saving
    const totalSaving = document.getElementById('savings-amount');
    totalSaving.innerText = savingAmount;

    // remaining balance before savings
    const balanceBeforeSaving = document.getElementById('balance').innerText;

    // remaining balance after savings and expense
    const remainingBalance = balanceBeforeSaving - savingAmount;

    // showing total remaining balance
    const remainingBalanceAmount = document.getElementById('remaining-balance');
    remainingBalanceAmount.innerText = remainingBalance;
    


    
});

