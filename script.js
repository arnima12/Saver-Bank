const calculateBtn = document.getElementById("calculate");
calculateBtn.addEventListener("click", function () {
    var income = document.getElementById("income").value;
    var incomeNumber = parseInt(income);

    const food = document.getElementById("food").value;
    const foodNumber = parseInt(food);

    const rent = document.getElementById("rent").value;
    const rentNumber = parseInt(rent);

    const clothes = document.getElementById("clothes").value;
    const clothesNumber = parseInt(clothes);

    const totalExpense = document.getElementById("totalExpense");
    const totalExpenseNumber = parseInt(totalExpense);

    let newTotalExpense;

    newTotalExpense = foodNumber + rentNumber + clothesNumber;
    totalExpense.innerText = newTotalExpense;

    if(incomeNumber>=newTotalExpense){
        var balance = document.getElementById("balance");
    var balanceNumber = parseInt(balance);

    let newBalance;

    newBalance = incomeNumber - newTotalExpense;
    balance.innerText = newBalance;
    }
    else{
        alert('Expense is greater than Income');
    }

})
const saveBtn = document.getElementById('save');
saveBtn.addEventListener('click', function () {
    var income = document.getElementById("income").value;
    var incomeNumber = parseInt(income);

    const percentage = document.getElementById('percentage').value;
    const percentageNumber = parseInt(percentage);

    const savingAmount = document.getElementById('savingAmount');
    const savingAmountNumber = parseInt(savingAmount);

    let newSavingAmount;
    newSavingAmount = incomeNumber * (percentageNumber / 100);
    
    savingAmount.innerText = newSavingAmount;

    const remaining = document.getElementById('remaining');
    const remainingNumber = parseInt(remaining);
    
    let newRemaining;

    var balance = document.getElementById("balance").innerText;
    var balanceNumber = parseInt(balance);
    
    newRemaining = balanceNumber - newSavingAmount;
    remaining.innerText = newRemaining;
})
