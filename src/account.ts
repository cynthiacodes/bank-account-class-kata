export class Account {
    accountId: number;
    private startBalance: number;
    constructor(accountId: number, startBalance: number) {
        this.accountId = accountId;
        this.startBalance = startBalance;
    }

    deposit(amount: number) {
        this.startBalance += amount;
    }

    withdraw(amount: number) {
        this.startBalance -= amount;
    }
    toString() {
        return `Account id: ${this.accountId}, balance: ${this.startBalance}`;
    }
}

const myAccount = new Account(123, 100);

//TODO: Code your class so that TypeScript rejects the following code.
// myAccount.startBalance = 1200000;

//let's check that it is still possible to manipulate the balance
//indirectly, via the deposit() function
myAccount.deposit(1_000_000); //ka-ching!
console.log(myAccount.toString());
