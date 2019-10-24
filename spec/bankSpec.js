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
        myAccount.withdrawal(400)
        myAccount.deposit(1000)
        result = myAccount.total
        expect(result).toEqual(600)
    })
    it('describes checking for date', function () {
        result = myAccount.findDate()
        expect(result).toEqual('24/10/2019')
    })
    it('describes printing out a statement', function () {
        let result = myAccount.print()
        expect(result).toEqual('date || credit || debit || balance\n')
    })
    it('describes doing a withdrawal and adding the line to the statement', function () {
        myAccount.withdrawal(500)
        result = myAccount.print()
        expect(result).toEqual('date || credit || debit || balance\n24/10/2019 ||  || 500 || -500.00\n')
    })
    it('describes doing a deposit and adding the line to the statement', function () {
        myAccount.deposit(1500)
        result = myAccount.print()
        expect(result).toEqual('date || credit || debit || balance\n24/10/2019 || 1500 || || 1500.00\n')
    })
})
