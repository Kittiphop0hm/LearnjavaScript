const Bank = require('./lib/Bank')

function bankManage() {
    const banks = []

    function addBank(accountNumber, ownerName) {
        return banks.push(new Bank(accountNumber, ownerName))
    }

    function findBank(accountNumber) {
        return banks.find((bank) => bank.accountNumber === accountNumber)
    }

    function findIndexBank(accountNumber) {
        return banks.findIndex((bank) => bank.accountNumber === accountNumber)
    }

    function removeBank(accountNumber) {
        return banks.splice(findIndexBank(accountNumber), 1)
    }

    function getBanks() {
        return banks
    }

    return {addBank, findBank, findIndexBank, removeBank, getBanks}
}

const {addBank, findBank, findIndexBank, removeBank, getBanks} = bankManage()
module.exports = {addBank, findBank, findIndexBank, removeBank, getBanks}

