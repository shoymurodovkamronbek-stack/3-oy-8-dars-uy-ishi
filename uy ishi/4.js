const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Vali" },
    { id: 3, name: "Hasan" }
];

const orders = [
    { id: 101, userId: 1, amount: 500 },
    { id: 102, userId: 2, amount: 300 },
    { id: 103, userId: 1, amount: 700 },
    { id: 104, userId: 3, amount: 200 },
    { id: 105, userId: 1, amount: 100 }
];

const userMap = new Map(
    users.map(user => [user.id, user])
);

const result = users.map(user => {
    let totalOrders = 0;
    let totalAmount = 0;

    orders.forEach(order => {
        const currentUser = userMap.get(order.userId);

        if (currentUser.id === user.id) {
            totalOrders++;
            totalAmount += order.amount;
        }
    });

    return {
        id: user.id,
        name: user.name,
        totalOrders,
        totalAmount
    };
});

console.log(result);