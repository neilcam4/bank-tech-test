<<<<<<< HEAD
function bankAccount(){
    this.total = 0.00
    this.amount = 0.00
    this.statement = []
}
bankAccount.prototype.findDate = function(){
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth()+ 1 ).padStart(2, '0')
    let year = today.getFullYear();
    today =  dd + '/' + mm + '/' + year 
    return today
}

bankAccount.prototype.deposit = function(amount){
    let date = this.findDate()
    let newAmount = parseFloat(amount).toFixed(2)
    this.total += amount
    let newTotal = parseFloat(this.total).toFixed(2)
    this.statement.unshift(date + ' || ' + newAmount + ' || || ' + newTotal + '\n')
    return newTotal
}

bankAccount.prototype.withdrawal =  function(amount){
    let date = this.findDate()
    this.total -= amount
    let newAmount = parseFloat(amount).toFixed(2)
    let newTotal = parseFloat(this.total).toFixed(2)
    let line = date + ' ||  || '+ newAmount + ' || ' + newTotal + '\n'
    this.statement.unshift(line)
    return newTotal
}
=======
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
>>>>>>> 75caca1ef23cc29033bd3695f6ae866d369a9da7

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