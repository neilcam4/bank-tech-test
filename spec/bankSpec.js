describe('TECH BANK', function(){
    it('describes creation of bank account with 0 funds', function(){
        let myAccount = new bankAccount()
        expect(myAccount.total).toEqual(0)
    })
    it('describes make a deposit and adds to debit funds', function(){
        let myAccount = new bankAccount()
        myAccount.deposit(1000)
        var result = myAccount.total
        expect(result).toEqual(1000)
    })
    it('describes making a withdrawal and new debit is calculated', function(){
        let myAccount = new bankAccount()
        myAccount.withdrawal(400)
        myAccount.deposit(1000)
        var result = myAccount.total
        expect(result).toEqual(600)
    })
    it('describes checking for date', function(){
        let myAccount = new bankAccount()
        let result = myAccount.findDate()
        expect(result).toEqual('21/10/2019')
    })
    it('describes printing out a statement', function(){
        let myAccount = new bankAccount()
        let result = myAccount.print()
        expect(result).toEqual('date || credit || debit || balance\n')
    })
   it('describes doing a withdrawal and adding the line to the statement', function(){
    let myAccount = new bankAccount()
    myAccount.withdrawal(500)
    let result = myAccount.print()
    expect(result).toEqual('date || credit || debit || balance\n21/10/2019 ||  || 500 || -500.00\n')
   })
   it('describes doing a deposit and adding the line to the statement', function(){
    let myAccount = new bankAccount()
    myAccount.deposit(1500)
    let result = myAccount.print()
    expect(result).toEqual('date || credit || debit || balance\n21/10/2019 || 1500 || || 1500.00\n')
   })
})