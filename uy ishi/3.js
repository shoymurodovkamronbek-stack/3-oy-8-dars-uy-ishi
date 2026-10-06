const sales = [
    { userId: 1, productId: 101, amount: 500 },
    { userId: 2, productId: 102, amount: 300 },
    { userId: 1, productId: 103, amount: 700 },
    { userId: 3, productId: 101, amount: 200 },
    { userId: 2, productId: 103, amount: 400 },
    { userId: 1, productId: 101, amount: 600 }
];

// 1
const userTotal = new Map();
for (const sale of sales) {
    const userId = sale.userId;
    if (userTotal.has(userId)) {
        userTotal.set(userId, userTotal.get(userId) + sale.amount);
    } else {
        userTotal.set(userId, sale.amount);
    }
}
console.log("1.", userTotal);

// 2
let maxUser = null;
let maxAmount = 0;
for (const [userId, amount] of userTotal) {
    if (amount > maxAmount) {
        maxAmount = amount;
        maxUser = userId;
    }
}
console.log("2.", maxUser, maxAmount);
// 3
const productCount = new Map();
for (const sale of sales) {
    const productId = sale.productId;
    if (productCount.has(productId)) {
        productCount.set(productId, productCount.get(productId) + 1);
    } else {
        productCount.set(productId, 1);
    }
}
console.log("3.", productCount);
// 4
let maxProduct = null;
let maxCount = 0;
for (const [productId, count] of productCount) {
    if (count > maxCount) {
        maxCount = count;
        maxProduct = productId;
    }
}
console.log("4.", maxProduct, maxCount);
// 5
const userProducts = new Map();
for (const sale of sales) {
    const userId = sale.userId;
    const productId = sale.productId;
    const amount = sale.amount;
    if (!userProducts.has(userId)) {
        userProducts.set(userId, new Map());
    }
    const productMap = userProducts.get(userId);
    if (productMap.has(productId)) {
        productMap.set(productId, productMap.get(productId) + amount);
    } else {
        productMap.set(productId, amount);
    }
}
console.log("5.", userProducts);

// 6
for (const [userId, products] of userProducts) {
    console.log(`User ${userId}:`);

    for (const [productId, totalAmount] of products) {
        console.log(`Product ${productId} → ${totalAmount}`);
    }
}