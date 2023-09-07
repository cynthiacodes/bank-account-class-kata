type WithdrawalResult =
    | { outcome: "success"; balance: number }
    | { outcome: "fail"; balance: number };

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
        let result: WithdrawalResult;
        if (amount <= this.startBalance) {
            result = {
                outcome: "success",
                balance: (this.startBalance -= amount),
            };
        } else {
            result = {
                outcome: "fail",
                balance: this.startBalance,
            };
        }
        return result;
    }
    toString() {
        return `Account id: ${this.accountId}, balance: ${this.startBalance}`;
    }
}

const yourAccount = new Account(42, 999); //id: 42, starting balance: 999

console.log(yourAccount.withdraw(9000));

console.log(yourAccount.toString()); //"Account id: 42, balance 99"
