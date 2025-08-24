const AddMoneyBtn = document.getElementById("AddMoneyBtn");
const AcoountNumber = document.getElementById("acoountNumber")
const Amount = document.getElementById("amount")
const SelectBank = document.getElementById("selectBank")
const Pin = document.getElementById("pin")
const Balance = document.getElementById("balance")
const Cashout = document.getElementById("cashout")
const Transfer = document.getElementById("transfer")
const AddMoney = document.getElementById("addMoney")
const Bonus = document.getElementById("bonus")
const Pay = document.getElementById("pay")
const Transactions = document.getElementById("transactions")
const Toggle1 = document.getElementById("toggle1")
const Toggle2 = document.getElementById("toggle2")
const Toggle3 = document.getElementById("toggle3")
const Toggle4 = document.getElementById("toggle4")
const Toggle5 = document.getElementById("toggle5")
const Toggle6 = document.getElementById("toggle6")
const LogoutBtn = document.getElementById("btn")

// logout feature 
LogoutBtn.addEventListener("click", function(){
    window.location.href = './Index.html';
})

// All Features 
AddMoneyBtn.addEventListener("click", function (e) {
    e.preventDefault()
    //get the value
    const AcoountNumberValue = parseInt(AcoountNumber.value) 
    const AmountValue = parseInt(Amount.value) 
    const SelectBankValue = SelectBank.value 
    const PinValue = parseInt(Pin.value) 
    const BalanceValue = parseInt(Balance.innerText) 
    
    
    // Calculate the Amount
    const TotalAmount = BalanceValue + AmountValue
    console.log(TotalAmount)

    // Add to the balance
    Balance.innerText = TotalAmount
    
})

// Toggle feature 



Cashout.addEventListener("click", function(){
    Toggle1.style.display = 'none'
    Toggle2.style.display = 'block'
     Toggle3.style.display = 'none'
    Toggle4.style.display = 'none'
    Toggle5.style.display = 'none'
    Toggle6.style.display = 'none'
})
Transfer.addEventListener("click", function(){
    Toggle1.style.display = 'none'
    Toggle2.style.display = 'none'
    Toggle3.style.display = 'block'
    Toggle4.style.display = 'none'
    Toggle5.style.display = 'none'
    Toggle6.style.display = 'none'
})
Bonus.addEventListener("click", function(){
    Toggle1.style.display = 'none'
    Toggle2.style.display = 'none'
    Toggle3.style.display = 'none'
    Toggle4.style.display = 'block'
    Toggle5.style.display = 'none'
    Toggle6.style.display = 'none'
})
Pay.addEventListener("click", function(){
    Toggle1.style.display = 'none'
    Toggle2.style.display = 'none'
    Toggle3.style.display = 'none'
    Toggle4.style.display = 'none'
    Toggle5.style.display = 'block'
    Toggle6.style.display = 'none'
})
Transactions.addEventListener("click", function(){
    Toggle1.style.display = 'none'
    Toggle2.style.display = 'none'
    Toggle3.style.display = 'none'
    Toggle4.style.display = 'none'
    Toggle5.style.display = 'none'
    Toggle6.style.display = 'block'
})

// default selected

document.addEventListener("DOMContentLoaded",function(){
AddMoney.addEventListener("click", function(){
    Toggle2.style.display = 'none'
    Toggle1.style.display = 'block'
     Toggle3.style.display = 'none'
    Toggle4.style.display = 'none'
    Toggle5.style.display = 'none'
    Toggle6.style.display = 'none'
})
AddMoney.click();
})

// Add all thing in history

AddMoneyBtn.addEventListener('click', function(e){
e.preventDefault();
 const newSection = document.createElement('section');
 newSection.innerHTML = ``
})