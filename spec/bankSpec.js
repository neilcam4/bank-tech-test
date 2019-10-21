describe('TECH BANK', function(){
    it('describes creation of bank account with 0 funds', function(){
        let myAccount = new bankAccount()
        expect(myAccount.total).toEqual(0)
    })
    it('describes make a deposit and adds to debit funds', function(){
        let myAccount = new bankAccount()
        myAccount.deposit(1000)
        var result = myAccount.balanceCheck()
        expect(result).toEqual(1000)
    })
    it('describes making a withdrawal and new debit is calcualted', function(){
        let myAccount = new bankAccount()
        myAccount.withdrawal(400)
        myAccount.deposit(1000)
        var result = myAccount.balanceCheck()
        expect(result).toEqual(600)
    })
    it('describes checking for date', function(){
        let myAccount = new bankAccount()
        let result = myAccount.findDate()
        expect(result).toEqual('21/10/2019')
    })
    it('describes printing out a statement', function(){
        let myAccount = new bankAccount()
        let result = myAccount.statement
        expect(result).toEqual(['date || credit || debit || balance\n'])
    })
   it('describes doing a withdrawal and adding the line to the statement', function(){
    let myAccount = new bankAccount()
    myAccount.withdrawal(500)
    console.log(myAccount)
    let result = myAccount.print()
    console.log(result)
    expect(result).toEqual("date || credit || debit || balance", "21/10/2019 ||  || 400 || -400.00")
   })
})