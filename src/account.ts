export class Account {
    accountId: number;
    startBalance: number;
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
