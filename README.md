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
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

************
### How to Use
*************

In javascript console:

let money = new BankAccount

money.deposit(1000)

money.deposit(1000)

money.withdrawal(500)

money.print()

![console](https://github.com/neilcam4/bank-tech-test/blob/master/banking.png)



