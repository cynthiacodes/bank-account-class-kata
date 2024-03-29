import { Account } from "./account";

test("toString to return the details from the Account class", () => {
    const myAccount = new Account(123, 100);

    expect(myAccount.toString()).toBe("Account id: 123, balance: 100");
});

test("testing the deposit method in Account class, it should increase the starting balance", () => {
    const myAccount = new Account(123, 100);
    myAccount.deposit(20);
    expect(myAccount.toString()).toBe("Account id: 123, balance: 120");
});

test("testing the withdraw method in Account class, it should decrease the starting balance", () => {
    const yourAccount = new Account(42, 999);
    yourAccount.withdraw(900);
    expect(yourAccount.toString()).toBe("Account id: 42, balance: 99");
});

test("testing the withdraw method in Account class, it should be a success when there is sufficient fund", () => {
    const yourAccount = new Account(42, 999);

    expect(yourAccount.withdraw(900)).toEqual({
        outcome: "success",
        balance: 99,
    });
});

test("testing the withdraw method in Account class, it should be a fail when there is insufficient fund", () => {
    const yourAccount = new Account(42, 999);

    expect(yourAccount.withdraw(9000)).toEqual({
        outcome: "fail",
        balance: 999,
    });
});
