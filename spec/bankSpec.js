describe('TECH BANK', function () {
    let myAccount;
    let result;
    beforeEach(() => {
        myAccount = new BankAccount()
    })
    it('describes creation of bank account with 0 funds', function () {
        expect(myAccount.total).toEqual(0)
    })
    it('describes make a deposit and adds to debit funds', function () {
        myAccount.deposit(1000)
        result = myAccount.total
        expect(result).toEqual(1000)
    })
    it('describes making a withdrawal and new debit is calculated', function () {
        myAccount.total = 600
        myAccount.withdrawal(400)
        myAccount.deposit(1200)
        result = myAccount.total
        expect(result).toEqual(1400)
    })
    it('describes checking for date', function () {
        result = myAccount.findDate()
        expect(result).toEqual(result)
    })
    it('describes printing out a statement', function () {
        let result = myAccount.print()
        expect(result).toEqual('date || credit || debit || balance\n')
    })
    it('describes doing a withdrawal and adding the line to the statement', function () {
        myAccount.total = 600
        myAccount.withdrawal(500)
        result = myAccount.print()
        date = myAccount.findDate()
        expect(result).toEqual(`date || credit || debit || balance\n${date} ||  || 500 || 100.00\n`)
    })
    it('describes doing a deposit and adding the line to the statement', function () {
        myAccount.deposit(1500)
        result = myAccount.print()
        date = myAccount.findDate()
        expect(result).toEqual(`date || credit || debit || balance\n${date} || 1500 || || 1500.00\n`)
    })
    it('describes an error message if balance is less than 0', function(){  
        expect(myAccount.withdrawal(20)).toEqual("Insufficient Funds to make transaction")
    })
})
