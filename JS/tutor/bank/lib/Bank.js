class Bank {
    constructor(accountNumber = 0, ownerName) {
        this.accountNumber = accountNumber
        this.ownerName = ownerName
        this.balance = 0.0
        this.transactions = []
    }

    deposit = (money) => {
        let amount = this.balance += money
        this.transactions.push(`deposit: ${amount}`)
        return this.balance
    }
    
    withdraw = (money) => {
        let amount = this.balance -= money
        this.transactions.push(`withdraw: ${amount}`)
        return this.balance
    }

    getBalance = () => this.balance
    getTransactions = () => this.transactions
}

module.exports = Bank