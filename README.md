# My Bank Account


An App that will record deposits and withdrawals and will print out a bank statement with all recorded transactions and with the given date.

## Installation

download the repo into your Projects folder using 
*******
git@github.com:neilcam4/bank-tech-test.git
********

open up SpecRunner.html in a browser

and visit the javascript console.


*********************
User Stories
**********************
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00

*********************************************************
In the console:
let myAccount = new bankAccount()
myAccount.deposit(1000)
myAccount.deposit(2000)
myAccount.withdrawal(500)
myAccount.print()

"date || credit || debit || balance
22/10/2019 ||  || 500.00 || 2500.00
22/10/2019 || 2000.00 || || 3000.00
22/10/2019 || 1000.00 || || 1000.00
"
