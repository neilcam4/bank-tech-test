describe('TECH BANK', function(){
    let myAccount;
<<<<<<< HEAD
    let result;
    beforeEach(function(){
        myAccount = new bankAccount()
    })

    it('describes creation of bank account with 0 funds', function(){
        expect(myAccount.total).toEqual(0.00)
=======
    beforeEach(()=> {
        myAccount = new BankAccount()
    })
    it('describes creation of bank account with 0 funds', function(){
        expect(myAccount.total).toEqual(0)
>>>>>>> 75caca1ef23cc29033bd3695f6ae866d369a9da7
    })
    it('describes make a deposit and adds to debit funds', function(){
        myAccount.deposit(1000)
        result = myAccount.total
        expect(result).toEqual(1000)
    })
    it('describes making a withdrawal and new debit is calculated', function(){
        myAccount.withdrawal(400)
        myAccount.deposit(1000)
        result = myAccount.total
        expect(result).toEqual(600)
    })
    it('describes checking for date', function(){
<<<<<<< HEAD
        result = myAccount.findDate()
        expect(result).toEqual('22/10/2019')
    })
    it('describes printing out a statement', function(){
        result = myAccount.print()
=======
        let result = myAccount.findDate()
        expect(result).toEqual('23/10/2019')
    })
    it('describes printing out a statement', function(){
        let result = myAccount.print()
>>>>>>> 75caca1ef23cc29033bd3695f6ae866d369a9da7
        expect(result).toEqual('date || credit || debit || balance\n')
    })
   it('describes doing a withdrawal and adding the line to the statement', function(){
    myAccount.withdrawal(500)
<<<<<<< HEAD
    result = myAccount.print()
    expect(result).toEqual('date || credit || debit || balance\n22/10/2019 ||  || 500.00 || -500.00\n')
   })
   it('describes doing a deposit and adding the line to the statement', function(){
    myAccount.deposit(1500)
    result = myAccount.print()
    expect(result).toEqual('date || credit || debit || balance\n22/10/2019 || 1500.00 || || 1500.00\n')
   })
   it('describes making 2 deposits and then a withdrawal and printing the balance', function(){
       myAccount.deposit(1000)
       myAccount.deposit(2000)
       myAccount.withdrawal(500)
       result = myAccount.print()
       expect(result).toEqual("date || credit || debit || balance\n22/10/2019 ||  || 500.00 || 2500.00\n22/10/2019 || 2000.00 || || 3000.00\n22/10/2019 || 1000.00 || || 1000.00\n")
=======
    let result = myAccount.print()
    expect(result).toEqual('date || credit || debit || balance\n23/10/2019 ||  || 500 || -500.00\n')
   })
   it('describes doing a deposit and adding the line to the statement', function(){
    myAccount.deposit(1500)
    let result = myAccount.print()
    expect(result).toEqual('date || credit || debit || balance\n23/10/2019 || 1500 || || 1500.00\n')
>>>>>>> 75caca1ef23cc29033bd3695f6ae866d369a9da7
   })
})