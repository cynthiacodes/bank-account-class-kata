/*const myAccount = new Account(123, 100);//id: 123, starting balance: 100
const yourAccount = new Account(42, 999); //id: 42, starting balance: 999

myAccount.deposit(20);

yourAccount.withdraw(900);

console.log(myAccount.toString()); //"Account id: 123, balance: 120"
console.log(yourAccount.toString()); //"Account id: 42, balance 99" */

export class Account {
    accountId: Number;
    startBalance: Number;
    constructor(accountId: number, startBalance: number) {
        this.accountId = accountId;
        this.startBalance = startBalance;
    }
    toString() {
        return `Account id: ${this.accountId}, balance: ${this.startBalance}`;
    }
}

// const myAccount = new Account(123, 100); //id: 123, starting balance: 100
// const yourAccount = new Account(42, 999); //id: 42, starting balance: 999
