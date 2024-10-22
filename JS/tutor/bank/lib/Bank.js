class BankAccount {
    constructor(accountNumber = 0, ownerName) {
        this.accountNumber = accountNumber
        this.ownerName = ownerName
        this.balance = 0.0
        this.transactions = []
    }

    deposit = (money) => {
        let amount = this.balance += Math.trunc(money)
        this.transactions.push(`deposit: ${Math.trunc(amount)}`)
        return Math.trunc(this.balance)
    }
    
    withdraw = (money) => {
        let amount = this.balance -= Math.trunc(money)
        this.transactions.push(`withdraw: ${Math.trunc(amount)}`)
        return Math.trunc(this.balance)
    }

    getBalance = () => this.balance
    getTransaction = () => this.transactions
}

// test cases
{
    // Test Case 1: Create a new account and deposit money
    const account1 = new BankAccount(123456, 'Alice Smith')
    console.log(account1.deposit(1500.75)) // Expected: 1500 (rounded down)

    // Test Case 2: Deposit more money
    console.log(account1.deposit(2500.45)) // Expected: 4000 (rounded down)

    // Test Case 3: Withdraw some money
    console.log(account1.withdraw(500.0)) // Expected: 3500 (rounded down)

    // Test Case 4: Attempt to withdraw more than the balance
    console.log(account1.withdraw(4000)) // Expected: "Insufficient funds for withdrawal."

    // Test Case 5: Get the current balance
    console.log(account1.getBalance()) // Expected: 3500

    // Test Case 6: Get the transaction history
    console.log(account1.getTransaction()) // Expected: ["deposit: 1500", "deposit: 2500", "withdraw: 500"]
}

module.exports = BankAccount