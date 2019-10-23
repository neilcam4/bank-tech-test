class BankAccount {
    constructor() {
        this.total = 0
        this.amount = 0
        this.statement = []
    }

    findDate() {
        let today = new Date()
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0')
        let year = today.getFullYear();
        today = dd + '/' + mm + '/' + year
        return today
    }

    deposit(amount) {
        let date = this.findDate()
        this.total += amount
        this.statement.unshift(date + ' || ' + amount + ' || || ' + this.total + '.00\n')
        return this.total
    }

    withdrawal = function (amount) {
        let date = this.findDate()
        this.total -= amount
        let line = date + ' ||  || ' + amount + ' || ' + this.total + '.00\n'
        this.statement.unshift(line)
        return this.total
    }

    print = function () {
        let header = 'date || credit || debit || balance\n'
        this.statement.unshift(header)
        let finalStatement = this.statement.join('')
        return finalStatement
    }
}