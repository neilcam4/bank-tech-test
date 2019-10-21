function bankAccount(){
    this.total = 0
    this.amount = 0
    this.statement =['date || credit || debit || balance\n']
}
bankAccount.prototype.findDate = function(){
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth()+ 1 ).padStart(2, '0')
    let year = today.getFullYear();
    today =  dd + '/' + mm + '/' + year 
    return today
}
bankAccount.prototype.balanceCheck= function(){
    let date = this.findDate()
    return this.total;
}

bankAccount.prototype.deposit = function(amount){
    let date = this.findDate()
    this.total+= amount
    this.statement.push(date + ' || ')
    this.statement.push(amount + ' || || ' + this.total+ '.00')
    return this.total
}

bankAccount.prototype.withdrawal =  function(amount){
    let date = this.findDate()
    this.total-= amount
    let line = date + ' ||  || '+ amount + ' || ' + this.total + '.00\n'
    this.statement.push(line)
    this.statement.join(",")
    console.log("statement= " + this.statement)
    return this.total
}

bankAccount.prototype.print = function(){
    return this.statement
}