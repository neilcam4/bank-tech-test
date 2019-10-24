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
### User Stories
**********************

`As a user,
In order to add money to my account,
I would like to make a deposit at a particular date.`


`As a user,
In order to withdrawal my money,
I would like to make a withdrawal at a particular date`


`As a user,
In order to see which transactions have taken place,
I would like to print out a bank statement.`


************
### How to Use
*************

In javascript console:


Create a new account


`let money = new BankAccount`


Deposit an amount of £1000


`money.deposit(1000)`


Deposit an amount of £2000


`money.deposit(1000)`


Withdrawal an amount of £5000


`money.withdrawal(500)`


Print out bank statement
`money.print()`


![console](https://github.com/neilcam4/bank-tech-test/blob/master/banking.png)



