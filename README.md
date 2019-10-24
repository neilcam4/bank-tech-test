# Alt-H1 My Bank Account
=========================

An App that will record deposits and withdrawals and will print out a bank statement with all recorded transactions.

Requirements
You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).
*********************
Acceptance criteria
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
