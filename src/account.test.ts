import { Account } from "./account";
const myAccount = new Account(123, 100); //id: 123, starting balance: 100

test("toString to return the details from the Account class", () => {
    expect(myAccount.toString()).toBe("Account id: 123, balance: 100");
});
